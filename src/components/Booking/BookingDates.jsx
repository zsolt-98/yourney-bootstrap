import { useEffect, useState } from "react";
import IconCalendar from "../react-svg-icons/IconCalendar";

export default function BookingDates({
  htmlFor,
  name,
  id,
  dateType,
  onChange,
  value,
  pickUpDate,
}) {
  const [minDateString, setMinDateString] = useState("");
  const [maxDateString, setMaxDateString] = useState("");
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    // Sets the min date to be today, and sets the max rental days to be 45 days from the selected pick-up date
    const maxRentalDays = 45;

    if (dateType === "Pick-up") {
      setMinDateString(today);
      setMaxDateString("");
    } else {
      if (pickUpDate) {
        const minDate = new Date(pickUpDate);
        minDate.setDate(minDate.getDate() + 1);
        setMinDateString(minDate.toISOString().split("T")[0]);

        const maxDate = new Date(pickUpDate);
        maxDate.setDate(maxDate.getDate() + maxRentalDays);
        setMaxDateString(maxDate.toISOString().split("T")[0]);
      } else {
        setMinDateString("");
        setMaxDateString("");
      }
    }
  }, [dateType, pickUpDate, today]);

  return (
    <div className="col">
      <div className="booking__form--input fs-3 d-flex flex-column">
        <label htmlFor={htmlFor} className="ms-3 mb-2">
          <span>
            <IconCalendar />
          </span>{" "}
          {dateType} date
        </label>

        <input
          type="date"
          name={name}
          id={id}
          className="fs-4 p-3"
          min={minDateString}
          max={maxDateString}
          onChange={onChange}
          value={value}
          onClick={(e) => e.currentTarget.showPicker()}
          disabled={dateType === "Drop-off" && !pickUpDate}
        />
      </div>
    </div>
  );
}
