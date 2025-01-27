import React, { useContext, useState } from 'react';
import './Navbar.css'; 
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { gettotalCartitem } = useContext(ShopContext);

  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>DUKAN</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shops"); }}>
          <Link style={{ textDecoration: 'none' }} to="/">shop</Link> 
          {menu === "shops" ? <hr /> : <></>}
        </li>
      
        <li onClick={() => { setMenu("men"); }}>
          <Link style={{ textDecoration: 'none', color: "gray" }} to="/mens">men</Link> 
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens"); }}>
          <Link style={{ textDecoration: 'none', color: "purple" }} to="/womens">women</Link> 
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids"); }}>
          <Link style={{ textDecoration: 'none', color: "yellow" }} to="/kids">kids</Link> 
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-loginCart">
        <Link to="/login"><button>login</button></Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{gettotalCartitem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
