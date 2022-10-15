import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productListPage.css";
import "./navbar.css";
const ProductList = () => {
  const [productdata, setproductdata] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setfilterData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [filtercategory, setFilterCategory] = useState("All");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setproductdata(data);
      });
  }, []);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    let value = filteredData.length ? filteredData : productdata;
    let data = value.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    console.log("data", data);
    if (data.length > 0) {
      setSearchData(data);
    } else {
      setSearchData([]);
    }
  };
  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
    let categoryChangedata = searchData.length
      ? searchData
      : productdata.filter((item) => {
          return item.category == e.target.value;
        });
    console.log("categoryChangedata", categoryChangedata);
    if (categoryChangedata.length) {
      setfilterData(categoryChangedata);
    } else {
      setfilterData([]);
    }
  };
  const categorySet = new Set(productdata.map((p) => p.category));
  const categories = Array.from(categorySet).sort();
  const filterCategoryUi = categories.map((item) => {
    return <option value={item}>{item}</option>;
  });
  let mapdatasearch = searchData.length
    ? searchData
    : productdata || filteredData.length
    ? filteredData
    : productdata;
  const LoadProductsUi = mapdatasearch.length
    ? mapdatasearch.map((item) => {
        return (
          <>
            <div className="card">
              <img
                src={item.image}
                style={{ width: "50%", height: "50%" }}
                alt="Denim Jeans"
              />
              <br />
              <p>
                {item.rating.rate}{" "}
                <span
                  class="fa fa-star checked"
                  style={{ color: "orange" }}
                ></span>
              </p>
              <Link to={"/product/" + item.id} state={{ test: item }}>
                {" "}
                {item.title}
              </Link>
              <p>Rs.{item.price}</p>
            </div>
          </>
        );
      })
    : productdata.map((item) => {
        return (
          <>
            <div className="card">
              <img
                src={item.image}
                style={{ width: "50%", height: "50%" }}
                alt="Denim Jeans"
              />
              <br />
              <p>
                {item.rating.rate}{" "}
                <span
                  class="fa fa-star checked"
                  style={{ color: "orange" }}
                ></span>
              </p>
              <Link to={"/product/" + item.id} state={{ test: item }}>
                {" "}
                {item.title}
              </Link>
              <p>Rs.{item.price}</p>
            </div>
          </>
        );
      });
  return (
    <>
      <nav class="navbar">
        <div class="logo">MUO</div>

        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
            <input
              type="text"
              placeholder="Search products.."
              value={searchValue}
              onChange={handleSearch}
              label="Search products"
            />
            <div className="filter-container">
              <div>
                <select
                  name="category-list"
                  id="category-list"
                  onChange={handleCategoryChange}
                  value={filtercategory}
                  style={{ height: "33px" }}
                >
                  <option value="">All</option>;{filterCategoryUi}
                </select>
              </div>
            </div>
            <Link to="/">Home</Link>
            {/* <Link to="/contactus">Contact</Link> */}
            {/* // <Link to="/Aboutus">About</Link>
            // <Link to="/Services">Services</Link>
            // <Link to="/productListPage">Products</Link>
             <Link to="/contactus">Contact</Link> */}
          </div>
        </ul>
      </nav>
      <div className="container">{LoadProductsUi}</div>
    </>
  );
};
export default ProductList;
