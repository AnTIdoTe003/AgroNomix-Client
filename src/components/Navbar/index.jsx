import {
  FaUserAlt,
  FaSearch,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
import "./style.scss";
import { useState } from "react";
import LoginPopup from "../LoginPopup";
import Modal from "../Modal";
import { useAuth } from "../../context/auth";
import axiosInstance from "../../helpers/axiosInstance";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
const Navbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const onClose = () => {
    setShowLoginPopup(false);
  };
  const onOpen = () => {
    setShowLoginPopup(true);
  };
  const [auth] = useAuth();
  const queryClient = useQueryClient(); 
  const handleLogoutMutation = useMutation(
    async () => {
      try {
        await axiosInstance.get('/auth/logout');
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    },
    {
      onSuccess: () => {
        window.location.reload()
        queryClient.invalidateQueries("authDetails");
      },
    }
  );

  const handleLogout = async () => {
    try {
      await handleLogoutMutation.mutateAsync(); 
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              <p>AgroNomix</p>
            </div>
            <div className="nav-search">
              <input type="text" />
              <FaSearch style={{ cursor: "pointer" }} />
            </div>
            <div className="nav-menu">
              <div className="nav-menu-content">
                {auth.user.name ? `Welcome ${auth.user.name}` : "User"}
              </div>
              <div className="nav-menu-content">
                <FaRegHeart />
                Wishlist
              </div>
              {auth.token ? (
                  <div className="nav-menu-content" onClick={handleLogout}>
                    <FaUserAlt />
                    Logout
                  </div>
              ) : (
                  <div className="nav-menu-content" onClick={onOpen}>
                    <FaUserAlt />
                    Login
                    <Modal onClose={onClose} onOpen={showLoginPopup}>
                      <LoginPopup onClose={onClose} />
                    </Modal>
                  </div>
              )}
              <div className="nav-menu-content">
                <FaShoppingCart />
                Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
