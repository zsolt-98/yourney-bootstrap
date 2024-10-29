import IconLocation from "../react-svg-icons/IconLocation.jsx";
import locationData from "../../assets/data/locationData.js";
import useBookingStore from "../../store/useBookingStore.js";

export default function BookingLocations({
  htmlFor,
  pointType,
  name,
  LocationType,
  id,
}) {
  const {
    form: { pickUpPoint, dropOffPoint },
    setPickUpPoint,
    setDropOffPoint,
  } = useBookingStore();

  const handleLocationChange = (e) => {
    const locationCityCountry = e.target.selectedOptions[0].text;
    const location = locationData.find(
      (loc) => `${loc.city}, ${loc.country}` === locationCityCountry
    );

    if (pointType === "Pick-up") {
      setPickUpPoint(location || "");
    } else {
      setDropOffPoint(location || "");
    }
  };

  const value = pointType === "Pick-up" ? pickUpPoint : dropOffPoint;

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
          onChange={handleLocationChange}
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
