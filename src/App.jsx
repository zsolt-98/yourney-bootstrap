// import { useState } from "react";
import "./App.scss";
import logo from "./assets/images/yourney-logo.png";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-xl px-5 py-4">
          <a href="index.html" className="navbar-brand">
            <img src={logo} width="225" alt="yourney logo" />
          </a>
          {/* space */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNavDropdown">
            <ul
              className="navbar-nav text-nowrap hstack gap-4 w-100 d-flex justify-content-center flex-lg-row flex-column fs-4 fw-semibold text-capitalize"
              id="hamburger__ul--1"
            >
              <li className="nav-item ">
                <a href="index.html" className="nav-link text-dark">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link text-dark">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link text-dark">
                  Vehicles
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link text-dark">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link text-dark">
                  Our team
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link text-dark">
                  Contact
                </a>
              </li>
            </ul>
            <ul
              className="navbar-nav text-nowrap  gap-4 align-items-center fs-4 fw-semibold "
              id="hamburger__ul--2"
            >
              <li className="nav-item">
                <a href="" className="text-decoration-none  text-dark">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary fs-4 fw-semibold px-4 py-3"
                  id="hamburger__btn"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
