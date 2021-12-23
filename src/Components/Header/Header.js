import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./header.css";
export const Header = () => {
  const [selected, setSelected] = useState("US");
  const [currency, setCurrency] = useState("USD");
  const getHandleEUR = () => {
    setCurrency("EUR");
  };
  const getHandleUSD = () => {
    setCurrency("USD");
  };
  return (
    <header id="mainHeader">
      <div className="px-1 py-1 top-nav d-flex justify-content-between align-items-center">
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
              <a
                className="call-num text-decoration-none text-white"
                title="+001 123 456 789"
                href="tel:+001123456789"
              >
                +001 123 456 789
              </a>
            </span>
          </div>
        </div>
        <div className="top-right d-flex justify-content-center align-items-center">
          <ul className="right-menu m-0 d-flex justify-content-center align-items-center">
            <li className="right-item">
              <a className="right-link" href="">
                My Account
              </a>
            </li>
            <li className="right-item">
              <a className="right-link" href="">
                About Us
              </a>
            </li>
            <li className="right-item">
              <a className="right-link" href="">
                Contact Us
              </a>
            </li>
            <li className="right-item ">
              <a className="right-link faq" href="">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
