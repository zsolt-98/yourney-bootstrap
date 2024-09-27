export default function Vehicles() {
  return (
    <>
      <section className="vehicles">
        <div className="text-dark bg-light py-8 vh-100">
          <div className="container-xl px-5 py-4">
            <div className="vehicles__content">
              <div className="vehicles__content--heading d-flex flex-column  align-items-center text-center gap-4">
                <h3 className="h2 fw-bold text-dark text-capitalize">
                  Vehicle models
                </h3>
                <h4 className="display-3 fw-bold">Our rental fleet</h4>
                <p className="h2 fw-normal text-nowrap">
                  Discover our curated collection of luxury vehicles,
                  <br /> perfect for your next adventure or business trip.
                </p>
              </div>
              <div className="car__models d-flex justify-content-between ">
                <div className="car__models--select d-flex flex-column gap-4 justify-content-center">
                  <button className="btn btn-secondary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    BMW 228i Gran Coupe
                  </button>
                  <button className="btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    Range Rover Sport
                  </button>
                  <button className="btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    Audi A8
                  </button>
                  <button className="btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    Chevrolet Tahoe
                  </button>
                  <button className="btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    Nissan Maxima
                  </button>
                  <button className="btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                    Mercedes Benz SL
                  </button>
                </div>
                <div className="d-flex justify-content-between gap-0 gap-xxl-6 align-items-center">
                  <div className="car__image--container">
                    <img
                      src="/src/assets/images/2022-bmw-gran-coupe.png"
                      alt=""
                    />
                  </div>
                  <div className="table__container text-center">
                    <table className="table table-bordered ">
                      <thead>
                        <tr className="table fs-1">
                          <th colSpan={2}>
                            $45 <span className="fs-2">per day</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="fs-3">
                        <tr>
                          <td>Model</td>
                          <td>228i</td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>BMW</td>
                        </tr>
                        <tr>
                          <td>Year</td>
                          <td>2022</td>
                        </tr>
                        <tr>
                          <td>Doors</td>
                          <td>4/5</td>
                        </tr>
                        <tr>
                          <td>Transmission</td>
                          <td>Manual</td>
                        </tr>
                        <tr>
                          <td>Fuel</td>
                          <td>Diesel</td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap w-100">
                      Reserve now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
