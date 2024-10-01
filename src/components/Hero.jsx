import q2 from "../assets/images/q2_sport_1280x1080px.png";
import heroBackgroundImg from "../assets/images/hero-background.png";
import IconCheckCircle from "./react-svg-icons/IconCheckCircle.jsx";
import IconRightArrow from "./react-svg-icons/IconRightArrow.jsx";

export default function Hero() {
  return (
    <>
      <section className="hero__section">
        <div className="text-dark bg-light">
          <div
            className="container-xl  px-5 py-4 d-flex justify-content-center justify-content-xl-between align-items-center"
            id="hero__container"
          >
            <div>
              <div className="text-container d-flex flex-column justify-content-center gap-5 text-center text-xl-start">
                <h1 className="display-1 fw-bold text-nowrap">
                  Premium rentals for
                  <br />
                  <span className="text-secondary">every</span> adventure
                </h1>
                <p className="fs-2 text-nowrap">
                  From sleek sports cars to luxurious SUVs,
                  <br /> our fleet ensures top-notch comfort <br /> and
                  performance for any journey.
                </p>
                <div className="d-flex gap-4 justify-content-center justify-content-xl-start">
                  <button className="hero__btn--book-ride btn btn-primary btn-lg text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    Book ride{" "}
                    <span>
                      <IconCheckCircle />
                    </span>
                  </button>
                  <button className="hero__btn--learn-more btn  btn-secondary btn-lg text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    Learn more{" "}
                    <span>
                      <IconRightArrow />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-75  d-none d-xl-block ">
              <div className="image__container">
                <img src={q2} alt="" className="car__img w-100" />
                <img
                  src={heroBackgroundImg}
                  alt=""
                  className="background__img  d-none d-xl-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
