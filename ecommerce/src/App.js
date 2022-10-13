import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homePage";
import ProductList from "./components/productlistpage";
import Productdetailspage from "./components/productdetailspage";
const App = () => {
  return (
    // <Homepage />
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/productListPage" element={<ProductList />} />
        <Route path="/product/:productId" element={<Productdetailspage />} />
        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
