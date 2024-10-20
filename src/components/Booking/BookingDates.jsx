import IconCalendar from "../react-svg-icons/IconCalendar";

export default function BookingDates({
  htmlFor,
  name,
  id,
  dateType,
  onChange,
  value,
}) {
  const today = new Date().toISOString().split("T")[0];
  const maxRentalDays = 45;
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + maxRentalDays);
  const maxDateString = maxDate.toISOString().split("T")[0];

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
          min={today}
          max={maxDateString}
          onChange={onChange}
          value={value}
          onClick={(e) => e.currentTarget.showPicker()}
        />
      </div>
    </div>
  );
}
