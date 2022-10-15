import React from "react";
import Navbar from "./navbar";
import "./navbar.css";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <img src="/image1.jpg" style={{ width: "100%", height: "30%" }} />
      <div className="footer">
        <h3>stay connected</h3>
        <i>
          <span style={{ marginLeft: "10px" }}>
            <a href="https://www.facebook.com/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7QqBdprW6swrx_DtjZk3b_gdFeQcISmgww4j7JszXA&s"
                style={{ height: "20px" }}
              />
            </a>
          </span>
        </i>

        <i>
          <span style={{ marginLeft: "10px" }}>
            <a href="#">
              <img
                src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                style={{ height: "20px" }}
              />
            </a>
          </span>
        </i>

        <i>
          <span style={{ marginLeft: "10px" }}>
            <a href="#">
              <img
                src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                style={{ height: "20px" }}
              />
            </a>
          </span>
        </i>

        <i>
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
