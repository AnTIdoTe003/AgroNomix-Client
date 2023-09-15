import React, { useState } from "react";
import OrderPersonalDetails from "./OrderPersonalDetails";
import OrderPayment from "./OrderPayment";
import OrderConfirm from "./OrderConfirm";
import "./style.scss";
function OrderRight() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    address: "",
  });
  console.log(formData)
  const FormTitles = ["Personal Details", "Payment", "Order Confirmation"];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <OrderPersonalDetails formData={formData} setFormData={setFormData} />
      );
    } else if (page === 1) {
      return <OrderPayment formData={formData} setFormData={setFormData} />;
    } else {
      return <OrderConfirm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {page !== 0 && (
            <button
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
          )}

          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("Order Placed Successfully");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1
              ? "Submit"
              : `Continue to ${FormTitles[page + 1]}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderRight;
