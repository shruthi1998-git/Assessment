import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { useLocation } from "react-router-dom";
import "./productdetailspage.css";
const Productdetailspage = () => {
  const location = useLocation();
  return (
    <>
      <div class="flex-container">
        <div style={{ flex: "8" }}>
          <img
            src={location.state.test.image}
            style={{ height: "50%", width: "50%" }}
          />
        </div>
        <div style={{ flex: "8" }}>
          <b>
            <h5 className="product-title">{location.state.test.title}</h5>
          </b>
          <p className="product-detail">{location.state.test.description}</p>
          <h6 className="product-price">{location.state.test.price} INR</h6>
          <DynamicStar
            rating={location.state.test.rating.rate}
            style={{ width: "10%",height:"20%" }}
          />
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
export default Productdetailspage;
