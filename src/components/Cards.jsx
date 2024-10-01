import selectCar from "../assets/images/card-select-car.png";
import selectDate from "../assets/images/card-select-date.png";
import hitTheRoad from "../assets/images/card-hit-the-road.png";

export default function Cards() {
  return (
    <>
      <section className="cards bg-dark py-8">
        <div
          className="container-xl px-6 py-4
        "
        >
          <div className="d-flex  flex-column  gap-4 text-light text-center">
            <h3 className="display-3 fw-semibold ">
              Where speed meets sophistication
            </h3>
            <p className="h2 fw-normal">
              Fast, easy bookings for an extraordinary driving experience
            </p>
          </div>
          <div className="cards__container d-flex gap-6 flex-wrap justify-content-center mt-8 pb-4">
            <div className="cards__card card bg-primary p-5 text-light align-items-center justify-content-evenly gap-3 text-center ">
              <div className="card__image--container">
                <img src={selectCar} className=" w-75" alt="" />
              </div>
              <h4 className="card-title h1">Select Vehicle</h4>
              <p className="card-text h4">
                Choose from our exclusive range of luxury vehicles, tailored to
                elevate your journey with unmatched performance and style
              </p>
            </div>
            <div className="cards__card card bg-secondary p-5 text-light align-items-center justify-content-evenly gap-3 text-center">
              <div className="card__image--container">
                <img src={selectDate} className="w-75 " alt="" />
              </div>
              <h4 className="card-title h1">Schedule Dates</h4>
              <p className="card-text h4">
                Select your rental dates with ease to match your travel plans
                perfectly. Enjoy a smooth booking experience from start to
                finish!
              </p>
            </div>
            <div className="cards__card card bg-light p-5 text-primary align-items-center justify-content-evenly gap-3 text-center">
              <div className="card__image--container">
                <img src={hitTheRoad} className="w-75" alt="" />
              </div>
              <h4 className="card-title h1">Hit the road</h4>
              <p className="card-text h4">
                All set! Time to hit the road and make unforgettable memories.
                Each mile brings new experiences just waiting to be discovered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
