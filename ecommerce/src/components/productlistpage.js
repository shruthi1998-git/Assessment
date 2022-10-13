import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productListPage.css";
const ProductList = () => {
  const [productdata, setproductdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setproductdata(data);
      });
  }, []);
  const LoadProductsUi = productdata.length
    ? productdata.map((item) => {
        return (
          <>
            <div className="card">
              <img
                src={item.image}
                style={{ width: "50%", height: "50%" }}
                alt="Denim Jeans"
              />
              <br />
              {/* <Link
                to={{
                  pathname: "/product/" + item.id,
                  state: {
                    image: item.image,
                    category: item.category,
                  },
                  // state: {
                  //   image: item.image,
                  //   category: item.category,
                  // },
                }}
              > */}
              <Link to={"/product/" + item.id} state={{ test: item }}>
                {" "}
                {item.title}
              </Link>
              <p>{item.price}INR</p>
              {/* <p>Some text about the jeans..</p>
              <p>
                <button>Add to Cart</button>
              </p>  */}
            </div>
            {/* <div class="card">
              <img src={item.image} alt="Avatar" style={{ width: "100%" }} />
              <div class="container">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div> */}
          </>
        );
      })
    : null;
  return (
    <>
      <div className="container">{LoadProductsUi}</div>
      product List page
    </>
  );
};
export default ProductList;
