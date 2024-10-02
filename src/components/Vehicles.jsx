import BMW from "../assets/images/2022-bmw-gran-coupe.png";
import VehiclesSelectButton from "./VehiclesSelectButton.jsx";

export default function Vehicles() {
  return (
    <>
      <section className="vehicles">
        <div className="text-dark bg-light py-8">
          <div className="container-xl px-5 py-4">
            <div className="vehicles__content">
              <div className="vehicles__content--heading d-flex flex-column  align-items-center text-center gap-4 mb-6 ">
                <h3 className="h2 fw-bold text-dark text-capitalize">
                  Vehicle models
                </h3>
                <h2 className="display-3 fw-bold">Our rental fleet</h2>
                <p className="h2  fw-normal ">
                  Discover our curated collection of luxury vehicles, perfect
                  for your next adventure or business trip.
                </p>
              </div>
              <div className="car__models d-flex justify-content-around flex-wrap">
                <div className="car__models--select d-flex flex-column flex-lg-row gap-4 justify-content-center flex-xxl-column flex-wrap">
                  <VehiclesSelectButton>
                    BMW 228i Gran Coupe
                  </VehiclesSelectButton>
                  <VehiclesSelectButton>Range Rover Sport</VehiclesSelectButton>
                  <VehiclesSelectButton>Audi A8</VehiclesSelectButton>
                  <VehiclesSelectButton>Chevrolet Tahoe</VehiclesSelectButton>
                  <VehiclesSelectButton>Nissan Maxima</VehiclesSelectButton>
                  <VehiclesSelectButton>Mercedes Benz SL</VehiclesSelectButton>
                </div>
                <div className="car__models--table d-flex justify-content-around gap-5 align-items-center mt-6 mt-xxl-0">
                  <div className="car__image--container">
                    <img src={BMW} alt="" />
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
