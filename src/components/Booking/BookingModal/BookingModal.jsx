import { useState } from "react";

import locationData from "../../../assets/data/locationData.js";
import vehiclesData from "../../../assets/data/vehiclesData.js";

import BookingModalForm from "./BookingModalForm.jsx";
import BookingModalDatesLocations from "./BookingModalDatesLocations.jsx";
import BookingModalCar from "./BookingModalCar.jsx";
import BookingModalPrice from "./BookingModalPrice.jsx";

export default function BookingModal({ selectedVehicle }) {
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [dropOffPoint, setDropOffPoint] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  const handlePickUpPointChange = (locationId) => {
    const location = locationData.find((loc) => loc.id === locationId);
    setPickUpPoint(location);
  };

  const handleDropOffPointChange = (locationId) => {
    const location = locationData.find((loc) => loc.id === locationId);
    setDropOffPoint(location);
  };

  const handleDatePickUpChange = (e) => {
    setPickUpDate(e.target.value);
  };

  const handleDateDropOffChange = (e) => {
    setDropOffDate(e.target.value);
  };

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div
      className="modal fade"
      id="bookingModal"
      tabIndex="-1"
      aria-labelledby="bookingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body position-relative">
            <button
              type="button"
              className="modal__button--x btn-close position-absolute top-0 end-0 m-4"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="p-6 mb-5">
              <h2 className="h1 fw-bold text-dark mb-5">Book your ride</h2>

              <BookingModalForm
                handlePickUpPointChange={handlePickUpPointChange}
                handleDropOffPointChange={handleDropOffPointChange}
                handleDatePickUpChange={handleDatePickUpChange}
                handleDateDropOffChange={handleDateDropOffChange}
              />

              <h2 className="h1 fw-bold text-dark my-5 text-capitalize">
                Rental details
              </h2>
              <div
                className="row text-dark justify-content-between
              "
              >
                <BookingModalDatesLocations
                  formatDate={formatDate}
                  pickUpDate={pickUpDate}
                  dropOffDate={dropOffDate}
                  pickUpPoint={pickUpPoint}
                  dropOffPoint={dropOffPoint}
                />

                <div className="col-lg-12 col-xl-7 mt-5 mt-xl-0">
                  <BookingModalCar selectedVehicle={selectedVehicle} />

                  <div className="row border rounded p-3 mt-5">
                    <BookingModalPrice
                      selectedVehicle={selectedVehicle}
                      pickUpDate={pickUpDate}
                      dropOffDate={dropOffDate}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-5 gap-4 px-0">
                  <button
                    className="modal__button--cancel btn btn-outline-primary btn-md text-primary border-2 fs-2 fw-semibold text-capitalize text-nowrap "
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <button className="modal__button--continue btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap ">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
