import { useState, useEffect, useRef, useCallback } from "react";
import locationData from "../../../assets/data/locationData.js";
import BookingModalForm from "./BookingModalForm.jsx";
import BookingModalDatesLocations from "./BookingModalDatesLocations.jsx";
import BookingModalCar from "./BookingModalCar.jsx";
import BookingModalPrice from "./BookingModalPrice.jsx";

export default function BookingModal({ selectedVehicle }) {
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [dropOffPoint, setDropOffPoint] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [detailsButtonClicked, setDetailsButtonClicked] = useState(false);

  const modalRef = useRef(null);
  const detailsRef = useRef(null);
  const collapseTimeoutRef = useRef(null);

  // Pick-up & Drop-off Location selection
  const handlePickUpPointChange = (locationCity) => {
    const location = locationData.find(
      (loc) => `${loc.city}, ${loc.country}` === locationCity
    );
    setPickUpPoint(location || "");
  };

  const handleDropOffPointChange = (locationCity) => {
    const location = locationData.find(
      (loc) => `${loc.city}, ${loc.country}` === locationCity
    );
    setDropOffPoint(location || "");
  };

  const handleDatePickUpChange = (e) => {
    setPickUpDate(e.target.value);
  };

  const handleDateDropOffChange = (e) => {
    setDropOffDate(e.target.value);
  };

  const checkFormValidity = useCallback(() => {
    return pickUpPoint && dropOffPoint && pickUpDate && dropOffDate;
  }, [pickUpPoint, dropOffPoint, pickUpDate, dropOffDate]);

  const startCollapseAnimation = () => {
    // Clear any existing collapse timeout
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }

    setIsFormValid(false);
    setIsDetailsVisible(false);
    setIsAnimating(true);

    collapseTimeoutRef.current = setTimeout(() => {
      setShowDetails(false);
      setIsAnimating(false);
      collapseTimeoutRef.current = null;
    }, 800);
  };

  const handleSeeDetailsClick = (e) => {
    e.preventDefault();
    setDetailsButtonClicked(true);

    if (checkFormValidity()) {
      setIsFormValid(true);
      setIsDetailsVisible(true);
      setShowDetails(true);
    } else {
      startCollapseAnimation();
    }
  };

  useEffect(() => {
    // Only trigger collapse if details are currently visible and form becomes invalid
    if (!checkFormValidity() && isDetailsVisible && !isAnimating) {
      startCollapseAnimation();
    }

    if (isDetailsVisible && detailsRef.current) {
      const height = detailsRef.current.scrollHeight;
      detailsRef.current.style.maxHeight = `${height * 2}px`;
    } else if (detailsRef.current) {
      detailsRef.current.style.maxHeight = "0px";
    }
  }, [checkFormValidity, isDetailsVisible, isAnimating]);

  const resetState = () => {
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
    setShowDetails(false);
    setIsAnimating(false);
    setPickUpPoint("");
    setDropOffPoint("");
    setPickUpDate("");
    setDropOffDate("");
    setIsFormValid(true);
    setDetailsButtonClicked(false);
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    const handleModalHidden = () => {
      resetState();
    };
    modalElement.addEventListener("hidden.bs.modal", handleModalHidden);
    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
    };
  }, []);

  return (
    <div
      className="modal fade"
      id="bookingModal"
      tabIndex="-1"
      aria-labelledby="bookingModalLabel"
      aria-hidden="true"
      ref={modalRef}
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
                handleSeeDetailsClick={handleSeeDetailsClick}
                pickUpPoint={pickUpPoint}
                dropOffPoint={dropOffPoint}
                pickUpDate={pickUpDate}
                dropOffDate={dropOffDate}
                isFormValid={isFormValid}
                detailsButtonClicked={detailsButtonClicked}
              />

              <div
                ref={detailsRef}
                className={`modal__rental--details ${
                  showDetails ? "show" : ""
                } ${isDetailsVisible ? "visible" : ""} ${
                  isAnimating ? "animating" : ""
                }`}
              >
                {showDetails && (
                  <>
                    <h2 className="h1 fw-bold text-dark my-5 text-capitalize">
                      Rental details
                    </h2>
                    <div className="row mx-0 text-dark pt-4 justify-content-between">
                      <BookingModalDatesLocations
                        pickUpDate={pickUpDate}
                        dropOffDate={dropOffDate}
                        pickUpPoint={pickUpPoint}
                        dropOffPoint={dropOffPoint}
                      />
                      <div className="col-lg-12 col-xl-7 px-0 mt-5 mt-xl-0">
                        <BookingModalCar selectedVehicle={selectedVehicle} />
                        <div className="row mx-0 border rounded p-3 mt-5">
                          <BookingModalPrice
                            selectedVehicle={selectedVehicle}
                            pickUpDate={pickUpDate}
                            dropOffDate={dropOffDate}
                          />
                        </div>
                        <div className="d-flex justify-content-end mt-5 gap-4 px-0">
                          <button
                            className="modal__button--cancel btn btn-outline-primary btn-md text-primary border-2 fs-2 fw-semibold text-capitalize text-nowrap"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Cancel
                          </button>
                          <button className="modal__button--continue btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
