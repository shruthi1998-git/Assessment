import React from "react";

// import { Link } from "react-router-dom";
import Navbar from "./navbar";
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
      {/* <nav class="navbar">
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
      </nav> */}

      {/* <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          <li id="carousel__slide1" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper">
              <a href="#carousel__slide4" class="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" class="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" class="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" class="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide3" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" class="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
              <a href="#carousel__slide1" class="carousel__navigation-button">
                Go to slide 1
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide2" class="carousel__navigation-button">
                Go to slide 2
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide3" class="carousel__navigation-button">
                Go to slide 3
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide4" class="carousel__navigation-button">
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section> */}
      <Navbar />
      <div class="footer">
        <h3>stay connected</h3>
        {/* <a href="https://www.facebook.com/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7QqBdprW6swrx_DtjZk3b_gdFeQcISmgww4j7JszXA&s"
            style={{ height: "20px" }}
          />
        </a>
        <a href="#">
          <img
            src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            style={{ height: "20px" }}
          />
        </a>
        <a href="#">
          <img
            src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            style={{ height: "20px" }}
          />
        </a> */}
        <i >
          <span style={{ marginLeft: "10px" }}>
            <a href="https://www.facebook.com/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7QqBdprW6swrx_DtjZk3b_gdFeQcISmgww4j7JszXA&s"
                style={{ height: "20px" }}
              />
            </a>
          </span>
        </i>

        <i >
          <span style={{ marginLeft: "10px" }}>
            <a href="#">
              <img
                src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                style={{ height: "20px" }}
              />
            </a>
          </span>
        </i>

        <i >
          <span style={{ marginLeft: "10px" }}>
            <a href="#">
              <img
                src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                style={{ height: "20px" }}
              />
            </a>
          </span>
        </i>

        <i >
          <span style={{ marginLeft: "10px" }}>
            <a href="#">
              <img
                src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                style={{ height: "20px" }}
              />
            </a>
          </span>
        </i>
      </div>
    </>
  );
};

export default Homepage;
