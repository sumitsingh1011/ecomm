import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components for routes
import Shop from "./pages/shop";
import ShopCategory from "./pages/shopCategory";
import Product from "./pages/product"; // Import the product component
import Cart from "./pages/cart"; // Import the cart component
import Login from "./pages/login"; // Import the login component
import Footer from "./components/Footer/Footer";
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />
          <Route path="/product/:productId" element={<Product />} />  {/* ✅ Correct route for products */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
