import React from "react";
import './style.scss'
const OrderPersonalDetails = ({formData,setFormData}) => {
  return (
    <div className="order-personal-details-wrapper">
      <div className="order-personal-details-container">
        <p>
          If you already have an account{" "}
          <span style={{ color: "#05386b" }}>Sign in here</span>
        </p>
        <div className="order-personal-details-input">
          <input type="text" placeholder="First Name" onChange={(e)=>setFormData({...formData,firstName:e.target.value})} />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="order-personal-details-input">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
        </div>
        <div className="order-personal-details-input">
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="State" />
        </div>
        <div className="order-personal-details-input">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Zip Code" />
        </div>
        <input type="text" placeholder="Address" />
      </div>
    </div>
  );
};

export default OrderPersonalDetails;
