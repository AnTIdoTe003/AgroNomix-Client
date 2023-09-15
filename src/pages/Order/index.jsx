import React from "react";
import OrderRight from "./OrderRight";
import OrderLeft from "./OrderLeft";
import "./style.scss";
const OrderPage = () => {
  return (
    <div className="order-page-wrapper">
      <div className="order-page-container">
        <div className="order-page-content">
          <div className="order-page-left">
            <OrderLeft />
          </div>
          <div className="order-page-right">
            <OrderRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
