import IconLocation from "../react-svg-icons/IconLocation.jsx";
import locationData from "../../assets/data/locationData.js";

export default function BookingLocations({
  htmlFor,
  pointType,
  name,
  LocationType,
  id,
  onChange,
  value,
}) {
  return (
    <div className="col">
      <div className="booking__form--select fs-3 d-flex flex-column">
        <label htmlFor={htmlFor} className="ms-3 mb-2">
          <span>
            <IconLocation />
          </span>{" "}
          {pointType} point
        </label>
        <select
          name={name}
          id={id}
          className="fs-4 p-3"
          onChange={(e) => onChange(e)}
          value={value ? `${value.city}, ${value.country}` : ""}
        >
          <option defaultValue="">Select {LocationType} location</option>
          {locationData.map(({ id, city, country }) => (
            <option
              key={id}
              value={`${city}, ${country}`}
            >{`${city}, ${country}`}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
