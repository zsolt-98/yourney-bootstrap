import vehiclesData from "../../assets/data/vehiclesData.js";
import IconCar from "../react-svg-icons/IconCar.jsx";

export default function BookingSelectVehicle() {
  return (
    <div className="col">
      <div className="booking__form--select fs-3 d-flex flex-column">
        <label htmlFor="vehicle-select" className="ms-3 mb-2">
          <span>
            <IconCar />
          </span>{" "}
          Select your vehicle
        </label>
        <select name="vehicle" id="vehicle-select" className="fs-4 p-3  ">
          <option value="" defaultValue="">
            Select your vehicle
          </option>
          {vehiclesData.map((vehicle, i) => (
            <option key={i} value={vehicle.name}>
              {vehicle.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
