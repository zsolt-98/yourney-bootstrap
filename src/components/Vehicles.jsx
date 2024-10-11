// import BMW from "../assets/images/2022-bmw-gran-coupe.png";

import vehiclesData from "../assets/data/vehiclesData.js";

export default function Vehicles() {
  const selectedVehicle = vehiclesData[0];

  return (
    <>
      <section className="vehicles">
        <div className="text-dark bg-light py-8">
          <div className="container-xl px-5 py-4">
            <div className="vehicles__content">
              <div className="vehicles__content--heading text-center mb-6 ">
                <h2 className="display-1 fw-bold mb-4">Our rental fleet</h2>
                <p className="h2  fw-normal ">
                  Discover our curated collection of luxury vehicles, perfect
                  for your next adventure or business trip.
                </p>
              </div>
              <div className="car__models d-flex justify-content-around flex-wrap">
                <div className="car__models--select d-flex flex-column flex-lg-row gap-4 justify-content-center flex-xxl-column flex-wrap">
                  {vehiclesData.map((vehicle) => (
                    <button
                      className="btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap"
                      key={vehicle.name}
                    >
                      {vehicle.name}
                    </button>
                  ))}
                </div>
                <div className="car__models--table d-flex justify-content-around gap-5 align-items-center mt-6 mt-xxl-0">
                  <div className="car__image--container">
                    <img
                      src={selectedVehicle.imgSource}
                      alt={selectedVehicle.name}
                    />
                  </div>
                  <div className="table__container text-center">
                    <table className="table table-bordered ">
                      <thead>
                        <tr className="table fs-1">
                          <th colSpan={2}>
                            ${selectedVehicle.price}{" "}
                            <span className="fs-2">per day</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="fs-3">
                        <tr>
                          <td>Model</td>
                          <td>{selectedVehicle.details.model}</td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>{selectedVehicle.details.brand}</td>
                        </tr>
                        <tr>
                          <td>Year</td>
                          <td>{selectedVehicle.details.year}</td>
                        </tr>
                        <tr>
                          <td>Doors</td>
                          <td>{selectedVehicle.details.doors}</td>
                        </tr>
                        <tr>
                          <td>Transmission</td>
                          <td>{selectedVehicle.details.transmission}</td>
                        </tr>
                        <tr>
                          <td>Fuel</td>
                          <td>{selectedVehicle.details.fuel}</td>
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
