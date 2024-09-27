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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                      </svg>
                    </span>
                  </button>
                  <button className="hero__btn--learn-more btn  btn-secondary btn-lg text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    Learn more{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-75  d-none d-xl-block ">
              <div className="image__container">
                <img
                  src="/src/assets/images/q2_sport_1280x1080px.png"
                  alt=""
                  className="car__img w-100"
                />
                <img
                  src="/src/assets/images/hero-background.png"
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
