export default function BookingModalDatesLocations({
  pickUpDate,
  dropOffDate,
  pickUpPoint,
  dropOffPoint,
}) {
  // Date display format for Rental Details (Dates & Times section)
  const formatDate = (date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="col-lg-12 col-xl-4">
      <div className="row border rounded p-3">
        <h3 className="fs-2 fw-semibold mb-3 text-capitalize">Dates & times</h3>
        <p className="fs-4 mb-2">
          <span className="fw-semibold">Pick-up:&nbsp;</span>
          <br />
          {formatDate(pickUpDate)} from 12:00 AM
        </p>
        <p className="fs-4 mb-3">
          <span className="fw-semibold">Drop-off:&nbsp;</span>
          <br />
          {formatDate(dropOffDate)} until 12:00 PM
        </p>
        <h3 className="fs-2 fw-semibold py-3 mb-0 text-capitalize border-top">
          Pick-up & drop-off location
        </h3>
        <p className="fs-4 mb-2">
          <span className="fw-semibold">Pick-up:&nbsp;</span>
          <br />
          {pickUpPoint.address}, <br />
          {pickUpPoint.postalCode}, <br />
          {pickUpPoint.city}, {pickUpPoint.country}
        </p>
        <p className="fs-4 mb-2">
          <span className="fw-semibold">Drop-off:&nbsp;</span>
          <br />
          {dropOffPoint.address}, <br />
          {dropOffPoint.postalCode}, <br />
          {dropOffPoint.city}, {dropOffPoint.country}
        </p>
      </div>
    </div>
  );
}
