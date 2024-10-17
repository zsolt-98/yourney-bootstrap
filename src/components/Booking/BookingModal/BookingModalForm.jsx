import BookingLocations from "../BookingLocations.jsx";
import BookingDates from "../BookingDates.jsx";

export default function BookingModalForm({
  handlePickUpPointChange,
  handleDropOffPointChange,
  handleDatePickUpChange,
  handleDateDropOffChange,
}) {
  return (
    <form action="">
      <div className="row row-cols-1 row-cols-lg-2 g-4">
        <BookingLocations
          htmlFor="pick-up-location"
          name="pickUpPoint"
          id="pick-up-location"
          pointType="Pick-up"
          LocationType="pick-up"
          onChange={(e) => handlePickUpPointChange(e.target.value)}
        />
        <BookingLocations
          htmlFor="drop-off-location"
          name="dropOffPoint"
          id="drop-off-location"
          pointType="Drop-off"
          LocationType="drop-off"
          onChange={(e) => handleDropOffPointChange(e.target.value)}
        />
        <BookingDates
          htmlFor="pick-up-date"
          name="pickUpDate"
          id="pick-up-date"
          dateType="Pick-up"
          onChange={handleDatePickUpChange}
        />
        <BookingDates
          htmlFor="drop-off-date"
          name="dropOffDate"
          id="drop-off-date"
          dateType="Drop-off"
          onChange={handleDateDropOffChange}
        />
      </div>
      <div className="d-flex justify-content-center justify-content-lg-end mt-5">
        <button className="modal__button--details btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap ">
          See details
        </button>
      </div>
    </form>
  );
}
