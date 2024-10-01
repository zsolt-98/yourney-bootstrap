import IconCheckCircle from "./react-svg-icons/IconCheckCircle.jsx";
import IconCar from "./react-svg-icons/IconCar.jsx";
import IconLocation from "./react-svg-icons/IconLocation.jsx";
import IconCalendar from "./react-svg-icons/IconCalendar.jsx";

export default function Booking() {
  return (
    <>
      <section className="booking pb-8 bg-light">
        <div className="container-xl px-5 py-4">
          <div className="booking__content p-6 mb-5 bg-white border border-0 rounded-3">
            <h2 className="h1 fw-bold text-dark mb-5">Book your ride</h2>
            <form action="">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div className="col">
                  <div className="booking__form--select fs-3 d-flex flex-column">
                    <label htmlFor="" className="ms-3 mb-2">
                      <span>
                        <IconCar />
                      </span>{" "}
                      Select your vehicle
                    </label>
                    <select name="" id="" className="fs-4 p-3  ">
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
                  <div className="booking__form--select fs-3 d-flex flex-column">
                    <label htmlFor="" className="ms-3 mb-2">
                      <span>
                        <IconLocation />
                      </span>{" "}
                      Pick-up point
                    </label>
                    <select name="" id="" className="fs-4 p-3  ">
                      <option value="">Select pick-up location</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="booking__form--select fs-3 d-flex flex-column">
                    <label htmlFor="" className="ms-3 mb-2">
                      <span>
                        <IconLocation />
                      </span>{" "}
                      Drop-off point
                    </label>
                    <select name="" id="" className="fs-4 p-3  ">
                      <option value="">Select drop-off location</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="booking__form--input fs-3 d-flex flex-column">
                    <label htmlFor="pick-up-time" className="ms-3 mb-2">
                      <span>
                        <IconCalendar />
                      </span>{" "}
                      Pick-up date
                    </label>

                    <input
                      type="date"
                      name=""
                      id="pick-up-time"
                      className="fs-4 p-3"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="booking__form--input fs-3 d-flex flex-column">
                    <label htmlFor="drop-off-time" className="ms-3 mb-2">
                      <span>
                        <IconCalendar />
                      </span>{" "}
                      Drop-off date
                    </label>
                    <input
                      type="date"
                      id="drop-off-time"
                      className="fs-4 p-3"
                    />
                  </div>
                </div>
                <div className="col d-flex flex-column justify-content-end">
                  <button className="booking__content--btn  btn btn-primary  text-white border-0 fs-3 fw-semibold text-capitalize text-nowrap">
                    Book ride{" "}
                    <span>
                      <IconCheckCircle
                        width={18}
                        height={18}
                        strokeWidth={0.4}
                      />
                    </span>
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
