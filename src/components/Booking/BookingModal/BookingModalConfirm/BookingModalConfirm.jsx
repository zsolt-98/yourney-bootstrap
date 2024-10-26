import IconPerson from "../../../react-svg-icons/IconPerson";
import IconEmailHollow from "../../../react-svg-icons/IconEmailHollow";
import IconTelephoneHollow from "../../../react-svg-icons/IconTelephoneHollow";
import IconCard from "../../../react-svg-icons/IconCard";
import IconExclamation from "../../../react-svg-icons/IconExclamation";
import IconCalendarHollow from "../../../react-svg-icons/IconCalendarHollow";
import IconLockHollow from "../../../react-svg-icons/IconLockHollow";

import BookingModalConfirmContact from "./BookingModalConfirmContact";

export default function BookingModalConfirm() {
  return (
    <div
      className="modal fade"
      id="bookingModalConfirm"
      tabIndex="-1"
      aria-labelledby="bookingModalConfirmLabel"
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
              <form action="">
                <div className="row justify-content-between">
                  <div className="card border-danger mb-5">
                    <div className="card-body text-danger">
                      <h5 className="card-title fs-3">
                        <IconExclamation /> Attention
                      </h5>
                      <p className="card-text fs-5">
                        Since this is just a demo project, the payment option is
                        disabled. The form can be sent, by filling out only the{" "}
                        <span className="text-primary fw-semibold">
                          First name
                        </span>{" "}
                        and{" "}
                        <span className="text-primary fw-semibold">
                          Last name
                        </span>{" "}
                        input fields.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h2
                      className="h1 fw-bold text-dark mb-5"
                      id="bookingModalConfirmLabel"
                    >
                      Contact details
                    </h2>
                    <BookingModalConfirmContact
                      icon={<IconPerson width="20" height="20" />}
                      label="First name"
                      name="firstName"
                      labelFor="first-name"
                      id="first-name"
                      type="text"
                      pattern="[A-Za-zÀ-ž\u0100-\u017F\u0180-\u024F]+"
                      required={true}
                      title="Please enter a valid first name (only letters and single spaces between words allowed)"
                      placeholder="Enter your first name"
                      span={<span className="text-danger">*</span>}
                    />
                    <BookingModalConfirmContact
                      icon={<IconPerson width="20" height="20" />}
                      label="Last name"
                      name="lastName"
                      labelFor="last-name"
                      id="last-name"
                      type="text"
                      pattern="[A-Za-zÀ-ž\u0100-\u017F\u0180-\u024F]+"
                      required={true}
                      title="Please enter a valid last name (only letters and single spaces between words allowed)"
                      placeholder="Enter your last name"
                      span={<span className="text-danger">*</span>}
                    />
                    <BookingModalConfirmContact
                      icon={<IconEmailHollow width="20" height="20" />}
                      label="Email"
                      name="email"
                      labelFor="email"
                      id="email"
                      type="email"
                      title="Please enter a valid last name (only letters and single spaces between words allowed)"
                      placeholder="Enter your email address"
                    />
                    <BookingModalConfirmContact
                      icon={<IconTelephoneHollow width="20" height="20" />}
                      label="Phone"
                      name="phone"
                      labelFor="phone"
                      id="phone"
                      pattern="[\+0-9]+"
                      required={true}
                      title="Please enter a valid phone number, including the country code if applicable."
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="col-12 col-lg-5">
                    <h2 className="h1 fw-bold text-dark mb-5">
                      Payment details
                    </h2>

                    <div className="booking__form--select fs-3 d-flex flex-column mb-4">
                      <label htmlFor="card-type" className="ms-1 mb-0">
                        <span>
                          <IconCard width="20" height="20" />
                        </span>{" "}
                        Card type
                      </label>
                      <select
                        name="cardType"
                        id="card-type"
                        className="fs-4 p-3"
                        disabled
                      ></select>
                    </div>
                    <BookingModalConfirmContact
                      icon={<IconPerson width="20" height="20" />}
                      label="Card holder name"
                      name="cardHolderName"
                      labelFor="card-holder-name"
                      id="card-holder-name"
                      type="text"
                      placeholder="Enter the name on the card"
                      disabled
                    />
                    <BookingModalConfirmContact
                      icon={<IconCard width="20" height="20" />}
                      label="Card number"
                      name="cardNumber"
                      labelFor="cardNumber"
                      id="cardNumber"
                      type="text"
                      placeholder="XXXX - XXXX - XXXX - XXXX"
                      disabled
                    />
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="booking__form--select fs-3 d-flex flex-column mb-4">
                          <label htmlFor="card-type" className="ms-1 mb-0">
                            <span>
                              <IconCalendarHollow width="20" height="20" />
                            </span>{" "}
                            Card type
                          </label>
                          <input
                            name="Expiry date"
                            id="expiry-date"
                            className="fs-4 p-3"
                            disabled
                            placeholder="MM / YYYY"
                          ></input>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="booking__form--select fs-3 d-flex flex-column mb-4">
                          <label htmlFor="cvv" className="ms-1 mb-0">
                            <span>
                              <IconLockHollow width="20" height="20" />
                            </span>{" "}
                            CVV
                          </label>
                          <input
                            name="CVV"
                            id="cvv"
                            className="fs-4 p-3"
                            disabled
                            placeholder="XXX"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-5 gap-4 px-0">
                  <button
                    className="modal__button--back btn btn-outline-primary btn-md text-primary border-2 fs-2 fw-semibold text-capitalize text-nowrap"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Back
                  </button>
                  <button
                    className="modal__button--confirm btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap"
                    data-bs-target="#bookingModalConfirm"
                    data-bs-toggle="modal"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
