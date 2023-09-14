import React from "react";
import "./style.scss";
import { useCart } from "../../context/cart";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../context/auth";
const CartPage = () => {
  const [cart] = useCart();
  const [auth] = useAuth();
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-left">
              <div className="cart-left-header">
                <p>Your cart items are here</p>
              </div>
          </div>
          <div className="cart-right">
            <div className="cart-right-header">
              <p>Your Total Price is</p>
            </div>
            <div className="cart-right-content">
              <Stack direction={"row"} justifyContent={"space-between"}>
                <p>Total Price:-</p>
                <p>Rs {auth.totalPrice}</p>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <p>Delivery Fee</p>
                <p style={{ textDecoration: "line-through", color: "red" }}>
                  Rs 99
                </p>
              </Stack>
              <p color={"green"} textAlign={"right"}>
                Free
              </p>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <p>
                  Total Amount <span style={{color:"#bbb"}}>(including GST)</span>
                </p>
                <p>Rs {auth.totalPrice}</p>
              </Stack>
              <div className="checkout-btn">
              <button>Go to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
