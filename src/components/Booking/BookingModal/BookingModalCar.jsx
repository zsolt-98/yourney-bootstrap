import IconTransmission from "../../react-svg-icons/IconTransmission.jsx";
import IconPerson from "../../react-svg-icons/IconPerson.jsx";
import IconSpeedometer from "../../react-svg-icons/IconSpeedometer.jsx";
import IconList from "../../react-svg-icons/IconList.jsx";
import IconCheck from "../../react-svg-icons/IconCheck.jsx";

export default function BookingModalCar({ selectedVehicle }) {
  const transmission = selectedVehicle.details.find(
    (detail) => detail.label === "Transmission"
  );

  return (
    <div className="row mx-0 border rounded p-3">
      <div className="col-12 col-lg-4 d-flex flex-column justify-content-start">
        <div>
          <h3 className="fs-2 fw-semibold mb-3 text-capitalize">Vehicle</h3>
          <p className="fs-4 mb-2">{selectedVehicle.name}</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <img
            src={selectedVehicle.imgSource}
            alt={selectedVehicle.name}
            style={{ height: "120px" }}
          />
        </div>
      </div>
      <div className="col-12 col-lg-8 d-flex flex-column align-items-end justify-content-center gap-4">
        <div className="row w-100 g-0 ps-0 ps-lg-7 ps-xl-5 ">
          <div className="col-12 d-flex flex-column flex-sm-row gap-0 gap-sm-5">
            <div className="d-flex flex-column align-items-center align-items-sm-start">
              <div className="d-flex mb-2">
                <span className="me-2">
                  <IconPerson width="21" height="21" />
                </span>
                <p className="fs-4 mb-2">{selectedVehicle.seats} seats</p>
              </div>
              <div className="d-flex mb-2">
                <span className="me-2">
                  <IconTransmission width="18" height="18" />
                </span>
                <p className="fs-4 mb-2">{transmission.value}</p>
              </div>
            </div>
            <div className="d-flex flex-column  align-items-center align-items-sm-start">
              <div className="d-flex mb-2">
                <span className="me-2">
                  <IconList width="18" height="18" />
                </span>
                <p className="fs-4 mb-2">Complete insurance</p>
              </div>
              <div className="d-flex mb-2">
                <span className="me-2">
                  <IconSpeedometer width="18" height="18" />
                </span>
                <p className="fs-4 mb-2">Unlimited mileage</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row w-100 g-0 ps-0 ps-lg-7 ps-xl-5 ">
          <div className="col-12 d-flex flex-column flex-sm-row gap-0 gap-sm-5">
            <div className="d-flex flex-column align-items-center align-items-sm-start">
              <div className="d-flex mb-2">
                <span className="me-2">
                  <IconCheck width="18" height="18" fill="#0abf53" />
                </span>
                <p className="fs-4 mb-2">VIP services</p>
              </div>
              <div className="d-flex mb-2">
                <span className="me-2">
                  <IconCheck width="18" height="18" fill="#0abf53" />
                </span>
                <p className="fs-4 mb-2">Helpful staff</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center align-items-sm-start">
              <div className="d-flex mb-2">
                <span className="me-2">
                  <IconCheck width="18" height="18" fill="#0abf53" />
                </span>
                <p className="fs-4 mb-2">
                  {selectedVehicle.rating} star rating
                </p>
              </div>
              <div className="d-flex mb-2">
                <span className="me-2">
                  <IconCheck width="18" height="18" fill="#0abf53" />
                </span>
                <p className="fs-4 mb-2">Free cancellation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
