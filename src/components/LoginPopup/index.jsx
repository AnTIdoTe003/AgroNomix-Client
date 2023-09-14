/* eslint-disable */
import { SvgClose } from "../../assets/icons/SvgClose";
import "./style.scss";
import {useState} from "react";
import {QueryClient, useMutation, useQueryClient} from "react-query";
import axiosInstance from "../../helpers/axiosInstance";
import Loader from "../Loader/Loader";
import {ToastContainer, toast} from "react-toastify";
const LoginPopup = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  const [formData, setFormData] = useState({ email: '', password: '' });
  const queryClient = useQueryClient(); 
  const handleLogin = useMutation(async ()=>{
    try{
     const{data}= await axiosInstance.post('/auth/login', formData)
     if(data.success){
      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
      });
     
     }
    }catch (error){
      toast.error("Try logging in again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
      });
    }
  },{
    onSuccess:()=>{
      queryClient.invalidateQueries("authDetails");
    }
  })
  return (
      <>

    <div className="login__wrapper">
      <div className="login__container">
        <div className="login__content">
          <div className="login__text">
            <h1>Login</h1>
          </div>
          <div className="login-input">
            <input type="email" placeholder="Email" onChange={(e)=>setFormData({...formData, email: e.target.value})} />
            <input type="password" placeholder="Password" onChange={(e)=>setFormData({...formData, password: e.target.value})} />
          </div>
          <div className="login__btn">
            <button disabled={handleLogin.isLoading} onClick={()=>handleLogin.mutate()}>{
              handleLogin.isLoading?<Loader/>:"Confirm"
            }</button>
          </div>
          <div className="login__close" >
            <SvgClose onClick={handleClose} />
          </div>
        </div>
      </div>
    </div>
        <ToastContainer/>
      </>

  );
};

export default LoginPopup;
