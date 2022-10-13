import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
const Productdetailspage = (props) => {
  const [productdata, setproductdata] = useState([]);
  const location = useLocation();
  console.log(location);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setproductdata(data);
      });
  }, []);

  useEffect(() => {
    let data = productdata.length
      ? productdata.find((item) => {
          return item.id == params.productId;
        })
      : null;
    console.log(data);
  }, [productdata]);

  return (
    // <button onClick={handleNavigation}>
    //   productPage
    // </button>
    // {isRedirect?}
    <>product details</>
  );
};
export default Productdetailspage;
