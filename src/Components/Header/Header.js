import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./header.css";
import Logo from "../../images/logo.png";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Navbar } from "./Navbar";
import { AsideMenu } from "./AsideMenu";
import { Link } from "react-router-dom";
import {LoginOrRegister} from "../LoginandRegister/LoginOrRegister"

export const Header = () => {
  const [userForm,setUserForm] = useState(false)
   const [selected, setSelected] = useState("US");
  const [currency, setCurrency] = useState("USD");
 const [asideActive, setAsideActive] = useState(false);


  const handleAside = () => setAsideActive(!asideActive)
 

  const getHandleEUR = () => {
    setCurrency("EUR");
  };
  const getHandleUSD = () => {
    setCurrency("USD");
  };

  
  return (
    <>
    <header id="mainHeader">
      <div className="container-fluid">
        <div className=" py-1 top-nav d-flex justify-content-between align-items-center">
          <div className=" top-left d-flex justify-content-center align-items-center">
            <ReactFlagsSelect
              className="p-0"
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={["US", "ES", "FR", "DE", "IT", "NL"]}
              customLabels={{
                US: "English",
                ES: "Español",
                FR: "Français",
                DE: "Deutsch",
                IT: "Italiano",
                NL: "Dutch",
              }}
              id="reactFlag"
            />
            <div className="dropdown">
              <button
                className="px-3 dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currency}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button
                    onClick={getHandleEUR}
                    className="dropdown-item"
                    type="button"
                  >
                    EUR €
                  </button>
                </li>
                <li>
                  <button
                    onClick={getHandleUSD}
                    className="dropdown-item"
                    type="button"
                  >
                    USD $
                  </button>
                </li>
              </ul>
            </div>
            <div className="need-help px-3">
              <span className="help-text">
                Need Help ?{" "}
                <Link
                  className="call-num text-decoration-none text-white"
                  title="+001 123 456 789"
                  to="tel:+001123456789"
                >
                  +001 123 456 789
                </Link>
              </span>
            </div>
          </div>
          <div className="top-right d-flex justify-content-center align-items-center">
            <ul className="right-menu m-0 d-flex justify-content-center align-items-center">
              <li className="right-item">
                <Link className="right-link" to="/">
                  My Account
                </Link>
              </li>
              <li className="right-item">
                <Link className="right-link" to="/">
                  About Us
                </Link>
              </li>
              <li className="right-item">
                <Link className="right-link" to="/">
                  Contact Us
                </Link>
              </li>
              <li className="right-item ">
                <Link className="right-link faq" to="/">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="middle-nav py-3 d-flex align-items-center justify-content-between">
          <Link className="navbar-brand mx-3" to="/">
            <img width={250} className="img-fluid" src={Logo} alt="" />
          </Link>
          <form className="search-form">
            <input
              className="px-3"
              id="search"
              placeholder="Search our catalog"
              type="text"
            />
            <button id="searchSubmit" type="submit">
              <BsSearch />
            </button>
          </form>
          <div className="middle-right">
            <div onClick={()=> setUserForm(!userForm)} className="login-menu">
              <FiUser className="userIcon" size={35} color="#fff" />

              <div className="login-or-register">
                <span className="login-header">Sign in</span>
                <span className="register-header">Create an Account</span>
              </div>
            </div>
            <div className="my-cart">
              <BsCart4 size={35} color="#fff" />
              <div className="cart-info">
                <span className="cart-header">My Cart</span>
                <span className="cart-price">€0.00</span>
              </div>
              <span className="product-quantity">0</span>
            </div>
          </div>
        </div>
        <Navbar
        handleAside={handleAside}
        />
      </div>
      <AsideMenu
      handleAside={handleAside}
      asideActive={asideActive}
      />
      <div onClick={handleAside} className={`aside-bg${asideActive ? " aside-bg-on" : ""}`}>
      </div>
    </header>
    {userForm && <LoginOrRegister onForm={userForm} updateForm={setUserForm} />}
    
    </>
    
  );
};
