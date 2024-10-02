import carFleet from "../assets/images/why-choose-us-cars.png";
import flexibleRentals from "../assets/images/1.png";
import comprehensiveInsurance from "../assets/images/2.png";
import noHiddenFees from "../assets/images/3.png";

import ChooseContentBadge from "./ChooseContentBadge.jsx";

export default function WhyChooseUs() {
  return (
    <>
      <section className="why__choose__us  bg-light">
        <div className="container-xl px-5 py-4 ">
          <div
            className="
          d-flex justify-content-center pt-6 pb-7"
          >
            <img src={carFleet} alt="" className="img-fluid" />
          </div>
          <div className="choose__content d-flex justify-content-between">
            <div className="choose__content--main d-flex flex-column text-dark">
              <h3 className="h2 fw-bold  text-capitalize">Why choose us</h3>
              <h2 className="display-1 fw-bold">Your journey, your choice</h2>
              <p className="fs-2">
                At Yourney, we pride ourselves on providing an unparalleled car
                rental experience. Our premium fleet features the latest luxury
                vehicles, meticulously maintained to ensure your journey is not
                just a ride, but an experience. With exceptional customer
                service and flexible rental options, we’re here to make your
                travel dreams a reality.
              </p>
            </div>
            <div className="choose__content--badges d-flex flex-column text-dark">
              <ChooseContentBadge imgSrc={flexibleRentals}>
                <h4 className="h2 fw-semibold">Flexible Rental Options</h4>
                <p className="fs-4">
                  Whether you need a car for a day or a month, our flexible
                  rental plans are designed to fit your schedule and needs.
                  Choose the duration that works for you.
                </p>
              </ChooseContentBadge>
              <ChooseContentBadge imgSrc={comprehensiveInsurance}>
                <h4 className="h2 fw-semibold">Comprehensive Insurance</h4>
                <p className="fs-4">
                  Travel with peace of mind knowing that all rentals include
                  comprehensive insurance coverage, protecting you against
                  unforeseen events during your journey.
                </p>
              </ChooseContentBadge>
              <ChooseContentBadge imgSrc={noHiddenFees}>
                <h4 className="h2 fw-semibold">No Hidden Fees</h4>
                <p className="fs-4">
                  Enjoy complete transparency with our pricing. We believe in
                  honest rentals, so you’ll never encounter unexpected charges
                  or hidden fees.
                </p>
              </ChooseContentBadge>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
