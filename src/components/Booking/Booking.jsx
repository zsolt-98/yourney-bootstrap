import IconCheckCircle from "../react-svg-icons/IconCheckCircle.jsx";

import BookingSelectVehicle from "../Booking/BookingSelectVehicle.jsx";
import BookingLocations from "../Booking/BookingLocations.jsx";
import BookingDates from "../Booking/BookingDates.jsx";

export default function Booking() {
  return (
    <>
      <section className="booking pb-8 bg-light">
        <div className="container-xl px-5 py-4">
          <div className="booking__content p-6 mb-5 bg-white border border-0 rounded-3">
            <h2 className="h1 fw-bold text-dark mb-5">Book your ride</h2>
            <form action="">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <BookingSelectVehicle />
                <BookingLocations
                  htmlFor="pick-up-location"
                  name="pickUpPoint"
                  id="pick-up-location"
                  pointType="Pick-up"
                  LocationType="pick-up"
                />
                <BookingLocations
                  htmlFor="drop-off-location"
                  name="dropOffPoint"
                  id="drop-off-location"
                  pointType="Drop-off"
                  LocationType="drop-off"
                />
                <BookingDates
                  htmlFor="pick-up-date"
                  name="pickUpDate"
                  id="pick-up-date"
                  dateType="Pick-up"
                />
                <BookingDates
                  htmlFor="drop-off-date"
                  name="dropOffDate"
                  id="drop-off-date"
                  dateType="Drop-off"
                />
                <div className="col d-flex flex-column justify-content-end">
                  <button className="booking__content--btn  btn btn-primary  text-white border-0 fs-3 fw-semibold text-capitalize text-nowrap">
                    Book ride{" "}
                    <span>
                      <IconCheckCircle
                        width={18}
                        height={18}
                        strokeWidth={0.4}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
