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
              <div className="car__models d-flex">
                <div className="car__models--select d-flex flex-column">
                  <button className="btn btn-primary"></button>
                  <button className="btn btn-primary"></button>
                  <button className="btn btn-primary"></button>
                  <button className="btn btn-primary"></button>
                  <button className="btn btn-primary"></button>
                  <button className="btn btn-primary"></button>
                </div>
                <div className="d-flex">
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
