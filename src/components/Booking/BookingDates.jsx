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
  dropOffDate,
}) {
  const [minDateString, setMinDateString] = useState("");
  const [maxDateString, setMaxDateString] = useState("");

  useEffect(() => {
    // Sets the min pick-up date to be today, and sets the max rental days to be 45 days from the selected pick-up date
    const today = new Date().toISOString().split("T")[0];
    const maxRentalDays = 45;

    // For the pick-up date input
    if (dateType === "Pick-up") {
      setMinDateString(today);

      // If a drop-off date is already specified, then a pick-up date after the drop-off date can't be selected, so the price doesn't go into the negatives
      if (dropOffDate) {
        const maxPickUp = new Date(dropOffDate);
        maxPickUp.setDate(maxPickUp.getDate() - 1);
        setMaxDateString(maxPickUp.toISOString().split("T")[0]);
      } else {
        // If no drop-off date is set, allow any future date
        setMaxDateString("");
      }
    } else {
      // For the drop-off date input
      if (pickUpDate) {
        // Drop-off must be at least 1 day after pick-up date
        const minDate = new Date(pickUpDate);
        minDate.setDate(minDate.getDate() + 1);
        setMinDateString(minDate.toISOString().split("T")[0]);

        // Maximum rental period from pick-up date
        const maxDate = new Date(pickUpDate);
        maxDate.setDate(maxDate.getDate() + maxRentalDays);
        setMaxDateString(maxDate.toISOString().split("T")[0]);
      } else {
        setMinDateString("");
        setMaxDateString("");
      }
    }
  }, [dateType, pickUpDate, dropOffDate]);

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
