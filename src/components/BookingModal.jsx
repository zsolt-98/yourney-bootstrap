import IconTransmission from "./react-svg-icons/IconTransmission.jsx";
import IconPerson from "./react-svg-icons/IconPerson.jsx";
import IconSpeedometer from "./react-svg-icons/IconSpeedometer.jsx";
import IconList from "./react-svg-icons/IconList.jsx";
import IconCheck from "./react-svg-icons/IconCheck.jsx";
import BMW228iGranCoupe from "../assets/images/2022-bmw-gran-coupe.png";

import BookingLocations from "./BookingLocations.jsx";
import BookingDates from "./BookingDates.jsx";

export default function BookingModal() {
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
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="bookingModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="p-6 mb-5 bg-white border border-0 rounded-3">
              <h2 className="h1 fw-bold text-dark mb-5">Book your ride</h2>
              <form action="">
                <div className="row row-cols-1 row-cols-lg-2 g-4">
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
                  />
                  <BookingDates
                    htmlFor="drop-off-date"
                    name="dropOffDate"
                    id="drop-off-date"
                  />
                </div>
                <div className="d-flex justify-content-center justify-content-lg-end mt-5">
                  <button className="modal__button--details btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap ">
                    See details
                  </button>
                </div>
              </form>
              <h2 className="h1 fw-bold text-dark my-5 text-capitalize">
                Rental details
              </h2>
              <div
                className="row text-dark justify-content-around
              "
              >
                <div className="col-3 border rounded p-3">
                  <h3 className="fs-2 fw-semibold mb-3 text-capitalize">
                    Dates & times
                  </h3>
                  <p className="fs-4 mb-2">
                    <span className="fw-semibold">Pick-up:</span> Wed, Oct 16,
                    2024 @ 12:00 PM
                  </p>
                  <p className="fs-4 mb-3">
                    <span className="fw-semibold">Drop-off:</span> Thu, Oct 17,
                    2024 @ 12:00 PM
                  </p>

                  <h3 className="fs-2 fw-semibold py-3 text-capitalize border-top">
                    Pick-up & drop-off location
                  </h3>
                  <p className="fs-4 mb-2">
                    <span className="fw-semibold">Pick-up:&nbsp;</span>
                    <br />
                    106 W 24th St, <br />
                    NY 10011, <br />
                    New York, USA
                  </p>
                  <p className="fs-4 mb-0">
                    <span className="fw-semibold">Drop-off:&nbsp;</span>
                    <br />
                    106 W 24th St, <br />
                    NY 10011, <br />
                    New York, USA
                  </p>
                </div>
                <div className="col-8 flex-grow">
                  <div className="row  border rounded p-3">
                    <div className="col-5 d-flex justify-content-center">
                      <div className="div">
                        <h3 className="fs-2 fw-semibold mb-3 text-capitalize">
                          Vehicle
                        </h3>
                        <p className="fs-4 mb-2">BMW 228i Gran Coupe</p>
                        <img
                          src={BMW228iGranCoupe}
                          alt=""
                          style={{ height: "120px" }}
                        />
                      </div>
                    </div>
                    <div className="col-7 d-flex flex-column align-items-end justify-content-center gap-4">
                      <div className="row w-100">
                        <div className="col-12 d-flex gap-5 ">
                          <div className="d-flex-flex-column">
                            <p className="fs-4 mb-2">
                              <span className="me-2">
                                <IconPerson width="18" height="18" />
                              </span>
                              5 seats
                            </p>
                            <p className="fs-4 mb-2">
                              <span className="me-2">
                                <IconTransmission width="18" height="18" />
                              </span>
                              Automatic
                            </p>
                          </div>
                          <div className="d-flex-flex-column">
                            <p className="fs-4 mb-2">
                              <span className="me-2">
                                <IconList width="18" height="18" />
                              </span>
                              Complete insurance
                            </p>
                            <p className="fs-4 mb-2">
                              <span className="me-2">
                                <IconSpeedometer width="18" height="18" />
                              </span>
                              Unlimited mileage
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row w-100">
                        <div className="col-12 d-flex gap-5 ">
                          <div className="d-flex-flex-column">
                            <p className="fs-4 mb-2">
                              <span className="me-2">
                                <IconCheck
                                  width="18"
                                  height="18"
                                  fill="#0abf53"
                                />
                              </span>
                              VIP services
                            </p>
                            <p className="fs-4 mb-2">
                              <span className="me-2">
                                <IconCheck
                                  width="18"
                                  height="18"
                                  fill="#0abf53"
                                />
                              </span>
                              Helpful staff
                            </p>
                          </div>
                          <div className="d-flex-flex-column">
                            <p className="fs-4 mb-2">
                              <span className="me-2">
                                <IconCheck
                                  width="18"
                                  height="18"
                                  fill="#0abf53"
                                />
                              </span>
                              9.5 star rating
                            </p>
                            <p className="fs-4 mb-2">
                              <span className="me-2">
                                <IconCheck
                                  width="18"
                                  height="18"
                                  fill="#0abf53"
                                />
                              </span>
                              Free cancelation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
