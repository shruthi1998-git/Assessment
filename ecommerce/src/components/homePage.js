import React from "react";

import { Link } from "react-router-dom";
import "./navbar.css";
const Homepage = () => {
  //   const [isRedirect, setIsRedirect] = useState(false);
  //   const handleNavigation = () => {
  //     setIsRedirect(true);
  //   };
  return (
    // <button onClick={handleNavigation}>
    //   productPage
    // </button>
    // {isRedirect?}
    <>
      <nav class="navbar">
        <div class="logo">MUO</div>

        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
            <Link to="/">Home</Link>
            <Link to="/Aboutus">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/productListPage">Products</Link>
            <Link to="/contactus">Contact</Link>
          </div>
        </ul>
      </nav>

      <div class="footer">
        <h5>About Us</h5>
        <a href="#">Aim</a>
        <a href="#">Vision</a>
        <a href="#">Testimonials</a>

        <h5>Services</h5>
        <a href="#">Writing</a>

        <h5>Social Media</h5>

        <i className="fab fa-facebook-f">
          <span style={{ marginLeft: "10px" }}>Facebook</span>
        </i>

        <i className="fab fa-instagram">
          <span style={{ marginLeft: "10px" }}>Instagram</span>
        </i>

        <i className="fab fa-twitter">
          <span style={{ marginLeft: "10px" }}>Twitter</span>
        </i>

        <i className="fab fa-youtube">
          <span style={{ marginLeft: "10px" }}>Youtube</span>
        </i>
      </div>
    </>
  );
};

export default Homepage;
