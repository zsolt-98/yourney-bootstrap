import logo from "../../assets/images/yourney-logo.png";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-0">
        <div className="container-xl px-5 py-4">
          <a href="index.html" className="navbar-brand">
            <img src={logo} width="225" alt="yourney logo" />
          </a>
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
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Vehicles
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Our team
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="index.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <ul
              className="navbar-nav text-nowrap  gap-4 align-items-center fs-4 fw-semibold "
              id="hamburger__ul--2"
            >
              <li className="nav-item">
                <a href="" className="text-decoration-none">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary border-0 fs-4 fw-semibold "
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
