import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const login = () => {
    history.push('/login');
  };

  const signup = () => {
    history.push('/signup');
  };

  return (
    <nav
      style={{
        backgroundColor: "black",
        color: "white",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "20px" }}>
        <img
          src="https://static.cdnlogo.com/logos/q/53/qwilr.svg"
          alt="Qwilr Logo"
          style={{ height: "50px", width: "auto" }}
        />
        Qwilr
      </div>
      <ul
        style={{
          display: "flex",
          fontFamily: "Arial",
          listStyleType: "none",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ marginRight: "30px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            PRODUCTS
          </Link>
        </li>
        <li style={{ marginRight: "30px" }}>
          <Link to="/templates" style={{ color: "white", textDecoration: "none" }}>
            TEMPLATES
          </Link>
        </li>
        <li style={{ marginRight: "30px" }}>
          <Link to="/pricing" style={{ color: "white", textDecoration: "none" }}>
            PRICING
          </Link>
        </li>
        <li style={{ marginRight: "30px" }}>
          <Link to="/customers" style={{ color: "white", textDecoration: "none" }}>
            CUSTOMERS
          </Link>
        </li>
        <li style={{ marginRight: "100px" }}>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              marginRight: "30px",
              border: "none",
              padding: "15px 25px",
              borderRadius: "8px",
            }} onClick={login}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              marginRight: "20px",
              border: "none",
              padding: "15px 25px",
              borderRadius: "8px",
            }} onClick={signup}
          >
            Sign up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
