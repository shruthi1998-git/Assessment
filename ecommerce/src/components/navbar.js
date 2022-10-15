import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import ProductList from "./productlistpage";
const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="logo">
          MUO
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lYaIbK8M6-JA2wJrMpJZXgphEh-JbC2LJxVotQTxqA&s"
            style={{ height: "40px", paddingLeft:"10px" }}
          />
        </div>

        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
            {/* <div class="search-container">  */}
            <Link to="/">Home</Link>
            <Link to="/Aboutus">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/productListPage">Products</Link>
            <Link to="/contactus">Contact</Link>
          </div>
        </ul>
      </nav>
      {/* pathname: "/productListPage" */}
    </>
  );
};
export default Navbar;
