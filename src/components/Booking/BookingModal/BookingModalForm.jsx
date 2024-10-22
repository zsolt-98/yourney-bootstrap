import { useEffect, useState } from "react";
import BookingLocations from "../BookingLocations.jsx";
import BookingDates from "../BookingDates.jsx";

import IconExclamation from "../../react-svg-icons/IconExclamation.jsx";

export default function BookingModalForm({
  handlePickUpPointChange,
  handleDropOffPointChange,
  handleDatePickUpChange,
  handleDateDropOffChange,
  handleSeeDetailsClick,
  pickUpPoint,
  dropOffPoint,
  pickUpDate,
  dropOffDate,
  isFormValid,
  detailsButtonClicked,
}) {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!isFormValid && detailsButtonClicked) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [isFormValid, detailsButtonClicked]);

  return (
    <form action="">
      <div className="row row-cols-1 row-cols-lg-2 g-4">
        <BookingLocations
          htmlFor="pick-up-location"
          name="pickUpPoint"
          id="pick-up-location"
          pointType="Pick-up"
          LocationType="pick-up"
          onChange={(e) =>
            handlePickUpPointChange(e.target.selectedOptions[0].text)
          }
          value={pickUpPoint}
        />
        <BookingLocations
          htmlFor="drop-off-location"
          name="dropOffPoint"
          id="drop-off-location"
          pointType="Drop-off"
          LocationType="drop-off"
          onChange={(e) =>
            handleDropOffPointChange(e.target.selectedOptions[0].text)
          }
          value={dropOffPoint}
        />
        <BookingDates
          htmlFor="pick-up-date"
          name="pickUpDate"
          id="pick-up-date"
          dateType="Pick-up"
          onChange={handleDatePickUpChange}
          value={pickUpDate}
        />
        <BookingDates
          htmlFor="drop-off-date"
          name="dropOffDate"
          id="drop-off-date"
          dateType="Drop-off"
          onChange={handleDateDropOffChange}
          value={dropOffDate}
          pickUpDate={pickUpDate}
        />
        {!isFormValid && detailsButtonClicked && (
          <div
            className={`modal__error--message col ${showError ? "show" : ""}`}
          >
            <div className="text-danger border border-danger rounded-1 p-3">
              <p className="fs-3 mb-0 d-inline-flex align-items-center">
                <span className="me-2 d-inline-flex align-items-center">
                  <IconExclamation />
                </span>
                Please fill out all of the fields
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center justify-content-lg-end mt-5">
        <button
          className="modal__button--details btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap "
          onClick={handleSeeDetailsClick}
          type="button"
        >
          See details
        </button>
      </div>
    </form>
  );
}
