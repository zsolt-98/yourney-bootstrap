export default function Cards() {
  return (
    <>
      <section className="cards bg-dark py-8">
        <div
          className="container-xl px-6 py-4
        "
        >
          <div className="d-flex  flex-column  gap-4 text-light text-center">
            <h3 className="display-2 fw-semibold ">
              When speed meets sophistication
            </h3>
            <p className="h2 fw-light">
              Fast, easy bookings for an extraordinary driving experience
            </p>
          </div>
          <div className="row g-5 mt-8 justify-content-evenly">
            <div className="col-lg-4 card bg-primary pb-5 px-6 text-light align-items-center  text-center">
              <div className="card__image--container">
                <img
                  src="src/assets/images/card-select-car.png"
                  className=" w-75"
                  alt=""
                />
              </div>
              <h4 className="card-title h1">Select Vehicle</h4>
              <p className="card-text h4">
                Choose from our exclusive range of luxury vehicles, tailored to
                elevate your journey with unmatched performance and style
              </p>
            </div>
            <div className="col-lg-4 card bg-secondary pb-5 px-6 text-dark align-items-center gap-3 text-center">
              <div className="card__image--container">
                <img
                  src="src/assets/images/card-select-car.png"
                  className="w-75 "
                  alt=""
                />
              </div>
              <h4 className="card-title h1">Select Vehicle</h4>
              <p className="card-text h4">
                Choose from our exclusive range of luxury vehicles, tailored to
                elevate your journey with unmatched performance and style
              </p>
            </div>
            <div className="col-lg-4 card  bg-secondary pb-5 px-6 text-dark align-items-center gap-3 text-center">
              <div className="card__image--container">
                <img
                  src="src/assets/images/card-select-car.png"
                  className="w-75"
                  alt=""
                />
              </div>
              <h4 className="card-title h1">Select Vehicle</h4>
              <p className="card-text h4">
                Choose from our exclusive range of luxury vehicles, tailored to
                elevate your journey with unmatched performance and style
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
