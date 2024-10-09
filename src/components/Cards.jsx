import selectCar from "../assets/images/card-select-car.png";
import selectDate from "../assets/images/card-select-date.png";
import hitTheRoad from "../assets/images/card-hit-the-road.png";

import Card from "./Card.jsx";

export default function Cards() {
  return (
    <>
      <section className="cards bg-dark py-8">
        <div
          className="container-xl px-5 py-4
        "
        >
          <div
            className="d-flex  flex-column gap-4 text-light text-center
          "
          >
            <h2 className="display-1 fw-semibold ">
              Where speed meets sophistication
            </h2>
            <p className="h2 fw-normal">
              Fast, easy bookings for an extraordinary driving experience
            </p>
          </div>
          <div className="cards__container d-flex gap-6 flex-wrap justify-content-center mt-8 pb-4">
            <Card image={selectCar} bgColor="bg-primary" textColor="text-light">
              <h4 className="card-title h1">Select Vehicle</h4>
              <p className="card-text h4">
                Choose from our exclusive range of luxury vehicles, tailored to
                elevate your journey with unmatched performance and style
              </p>
            </Card>
            <Card
              image={selectDate}
              bgColor="bg-secondary"
              textColor="text-light"
            >
              <h4 className="card-title h1">Schedule Dates</h4>
              <p className="card-text h4">
                Select your rental dates with ease to match your travel plans
                perfectly. Enjoy a smooth booking experience from start to
                finish!
              </p>
            </Card>
            <Card
              image={hitTheRoad}
              bgColor="bg-light"
              textColor="text-primary"
            >
              <h4 className="card-title h1">Hit the road</h4>
              <p className="card-text h4">
                All set! Time to hit the road and make unforgettable memories.
                Each mile brings new experiences just waiting to be discovered.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
