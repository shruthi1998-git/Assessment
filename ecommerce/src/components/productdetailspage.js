import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./productdetailspage.css";
const Productdetailspage = (props) => {
  const [productdata, setproductdata] = useState([]);
  const [productdetail, setproductdetail] = useState([]);
  const location = useLocation();
  console.log("state", location.state.test);
  const params = useParams();
  console.log(params);
  let data;
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setproductdata(data);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     data = productdata.length
  //       ? productdata.find((item) => {
  //           return item.id == params.productId;
  //         })
  //       : null;
  //     // setproductdetail(data);
  //     console.log(data);
  //   }, [productdata]);

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
            {" "}
            <h5 className="product-title">{location.state.test.title}</h5>
          </b>
          <p className="product-detail">{location.state.test.description}</p>
          <h6 className="product-price">{location.state.test.price} INR</h6>
          <button>Add to Cart</button>
          {/* <p>{location.state.test.price}</p>
          <p>{location.state.test.rating}</p> */}{" "}
        </div>
      </div>
    </>
  );
};
export default Productdetailspage;
