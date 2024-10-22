export default function BookingModalPrice({
  selectedVehicle,
  pickUpDate,
  dropOffDate,
}) {
  // Calculating the price of the rental
  const firstDay = new Date(pickUpDate);
  const lastDay = new Date(dropOffDate);
  const timeDiff = lastDay - firstDay;
  // Set minimum number of days to 1
  const numberOfDays = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

  const dailyPrice = selectedVehicle.price;
  const basePrice = dailyPrice * numberOfDays;
  const tax = basePrice * 0.2;
  const estimatedTotal = basePrice + tax;

  return (
    <div className="col-12 modal__col--breakdown">
      <div className="mb-3 border-bottom">
        <h3 className="fs-2 fw-semibold mb-3 text-capitalize">
          Price breakdown
        </h3>
        <h4 className="fw-semibold fs-4 mb-2 pb-3">Vehicle</h4>
        <li className="list-unstyled d-flex justify-content-between">
          <p className="fs-4 mb-2 ">Time & distance {numberOfDays} day(s)</p>
          <p className="fs-4 mb-2 ">$ {basePrice.toFixed(2)}</p>
        </li>
        <li className="list-unstyled d-flex justify-content-between">
          <p className="fs-4 mb-2 ">Unlimited mileage</p>
          <p className="fs-4 mb-2 ">Included</p>
        </li>
        <h4 className="fw-semibold fs-4 mb-2 py-3">Extras</h4>
        <p className="fs-4 mb-2 ">-</p>
      </div>
      <div className="my-3 border-bottom">
        <li className="list-unstyled d-flex justify-content-between">
          <p className="fs-4 mb-2 fw-semibold text-primary ">Taxes & fees</p>
          <p className="fs-4 mb-2 ">$ {tax.toFixed(2)}</p>
        </li>
      </div>
      <div className="">
        <li className="list-unstyled d-flex justify-content-between align-items-center">
          <p className="fs-4 mb-2 ">Estimated total</p>
          <p className="mb-2 fs-1 fw-bold">$ {estimatedTotal.toFixed(2)}</p>
        </li>
      </div>
    </div>
  );
}
