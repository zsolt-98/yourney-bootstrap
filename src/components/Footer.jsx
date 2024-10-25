import logo from "../assets/images/logo-y-green.png";
import IconTelephone from "./react-svg-icons/IconTelephone.jsx";
import IconEmail from "./react-svg-icons/IconEmail.jsx";
import IconFacebook from "./react-svg-icons/IconFacebook.jsx";
import IconLinkedIn from "./react-svg-icons/IconLinkedIn.jsx";
import IconInstagram from "./react-svg-icons/IconInstagram.jsx";

import FooterNavList from "./FooterNavList.jsx";

export default function Footer() {
  return (
    <footer className="footer bg-dark py-6">
      <div className="container-xl px-5 py-4">
        <div className="row g-6 g-xl-0 pb-6">
          <div className="footer__col--left col-lg-6 text-light d-flex justify-content-center justify-content-lg-start">
            <div className="w-75 d-flex flex-column gap-4">
              <img src={logo} alt="yourney-logo" className="footer__logo" />
              <p className="fs-5">
                We specialize in delivering unparalleled luxury and performance.
                Trust us to provide you with a fascinating car rental
                experience.
              </p>
              <div className="fs-2">
                <p className="">
                  <span className="pe-1 footer__icon--main">
                    <IconTelephone />
                  </span>{" "}
                  (060) - 123 - 233
                </p>
                <p className="">
                  <span className="pe-2 footer__icon--main">
                    <IconEmail width="30" height="30" />
                  </span>{" "}
                  info@yourney.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row text-light ">
              <FooterNavList header="Company">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Our fleet</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </FooterNavList>
              <FooterNavList header="Support">
                <li>
                  <a href="">Download app</a>
                </li>
                <li>
                  <a href="">See locations</a>
                </li>
                <li>
                  <a href="">Live chat</a>
                </li>
              </FooterNavList>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end hstack gap-3 mb-3">
            <a href="" className="footer__icon--social">
              <IconFacebook />
            </a>
            <a href="" className="footer__icon--social">
              <IconLinkedIn />
            </a>
            <a href="" className="footer__icon--social">
              <IconInstagram />
            </a>
          </div>
          <hr className="footer__divider" />
          <div className="footer__copy col-12 d-flex justify-content-between text-light fs-4">
            <p>&copy; 2024 Yourney Ltd.</p>
            <p>
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
