export default function BookingModalPrice() {
  return (
    <div className="col-12 modal__col--breakdown">
      <div className="mb-3 border-bottom">
        <h3 className="fs-2 fw-semibold mb-3 text-capitalize">
          Price breakdown
        </h3>
        <h4 className="fw-semibold fs-4 mb-2 pb-3">Vehicle</h4>
        <li className="list-unstyled d-flex justify-content-between">
          <p className="fs-4 mb-2 ">Time & distance 1 day(s)</p>
          <p className="fs-4 mb-2 ">$ 424.64</p>
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
          <p className="fs-4 mb-2 ">$ 84.98</p>
        </li>
      </div>
      <div className="">
        <li className="list-unstyled d-flex justify-content-between align-items-center">
          <p className="fs-4 mb-2 ">Estimated total</p>
          <p className="mb-2 fs-1 fw-bold">$ 509.64</p>
        </li>
      </div>
    </div>
  );
}
