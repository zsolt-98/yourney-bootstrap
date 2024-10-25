import IconPerson from "../../../react-svg-icons/IconPerson";
import IconEmailHollow from "../../../react-svg-icons/IconEmailHollow";
import IconTelephoneHollow from "../../../react-svg-icons/IconTelephoneHollow";

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
              <h2
                className="h1 fw-bold text-dark mb-5"
                id="bookingModalConfirmLabel"
              >
                Contact details
              </h2>
              <form action="">
                <div className="row">
                  <div className="col-10 col-lg-5">
                    <BookingModalConfirmContact
                      icon={<IconPerson width="20" height="20" />}
                      label="First name"
                      name="firstName"
                      labelFor="first-name"
                      id="first-name"
                      type="text"
                      pattern="[A-Za-z]+"
                      required={true}
                      title="Please enter a valid first name (only letters and single spaces between words allowed)"
                    />
                    <BookingModalConfirmContact
                      icon={<IconPerson width="20" height="20" />}
                      label="Last name"
                      name="lastName"
                      labelFor="last-name"
                      id="last-name"
                      type="text"
                      pattern="[A-Za-z]+"
                      required={true}
                      title="Please enter a valid last name (only letters and single spaces between words allowed)"
                    />
                    <BookingModalConfirmContact
                      icon={<IconEmailHollow width="20" height="20" />}
                      label="Email"
                      name="email"
                      labelFor="email"
                      id="email"
                      type="email"
                      title="Please enter a valid last name (only letters and single spaces between words allowed)"
                    />
                    <BookingModalConfirmContact
                      icon={<IconTelephoneHollow width="20" height="20" />}
                      label="Phone"
                      name="phone"
                      labelFor="phone"
                      id="phone"
                      pattern="[0-9]+"
                      required={true}
                      title="Please enter a valid phone number, including the country code if applicable."
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
