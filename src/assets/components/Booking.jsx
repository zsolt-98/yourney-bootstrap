export default function Booking() {
  return (
    <>
      <section className="booking__section bg-light">
        <div className="container-xl px-5 py-4">
          <div className="booking__content p-6 bg-white border border-0 rounded-3">
            <h2 className="h1 fw-bold text-dark mb-5">Book your ride</h2>
            <form action="">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div className="col">
                  <div className="form-select-car fs-3 d-flex flex-column">
                    <label htmlFor="" className="">
                      Select your vehicle
                    </label>
                    <select name="" id="" className="fs-5 p-3  ">
                      <option value="">Select your vehicle</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="form-select-car fs-3 d-flex flex-column">
                    <label htmlFor="" className="">
                      Pick-up point
                    </label>
                    <select name="" id="" className="fs-5 p-3  ">
                      <option value="">Select pick-up location</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="form-select-car fs-3 d-flex flex-column">
                    <label htmlFor="" className="">
                      Drop-off point
                    </label>
                    <select name="" id="" className="fs-5 p-3  ">
                      <option value="">Select drop-off location</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="form-select-car fs-3 d-flex flex-column">
                    <label htmlFor="pick-up-time" className="">
                      Pick-up date
                    </label>

                    <input
                      type="date"
                      name=""
                      id="pick-up-time"
                      className="fs-5 p-3"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-select-car fs-3 d-flex flex-column">
                    <label htmlFor="drop-off-time" className="">
                      Drop-off date
                    </label>
                    <input
                      type="date"
                      id="drop-off-time"
                      className="fs-5 p-3"
                    />
                  </div>
                </div>
                <div className="col d-flex flex-column justify-content-end">
                  <button className="booking__btn--book-ride  btn btn-primary  text-white border-0 fs-3 fw-semibold text-capitalize text-nowrap">
                    Book ride
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
