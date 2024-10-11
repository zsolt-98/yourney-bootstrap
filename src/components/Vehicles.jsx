import { useState, useEffect } from "react";
import vehiclesData from "../assets/data/vehiclesData.js";

export default function Vehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehiclesData[0]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle((prevVehicle) => {
      if (prevVehicle !== vehicle) {
        setImageLoaded(false);
        return vehicle;
      }
      return prevVehicle;
    });
  };

  const preloadImages = (vehicles) => {
    vehicles.forEach(({ imgSource }) => {
      const img = new Image();
      img.src = imgSource;
    });
  };

  useEffect(() => {
    preloadImages(vehiclesData);
  }, []);

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
                      className={`btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap ${
                        selectedVehicle === vehicle ? "car__active" : ""
                      } `}
                      key={vehicle.name}
                      onClick={() => handleVehicleSelect(vehicle)}
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
                      style={{ visibility: imageLoaded ? "visible" : "hidden" }}
                      onLoad={() => setImageLoaded(true)}
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
                        {selectedVehicle.details.map(({ label, value }) => (
                          <tr key={label}>
                            <td className="table__column--left">{label} </td>
                            <td>{value}</td>
                          </tr>
                        ))}
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
