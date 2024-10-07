import example from "../assets/images/2022-bmw-gran-coupe.png";
import testimonialGuy from "../assets/images/testimonial-guy-1.png";

export default function Testimonials() {
  return (
    <section className="testimonials py-8">
      <div className="container-xl px-5 py-4 ">
        <div className="d-flex justify-content-center text-start">
          <div className="testimonials__heading text-dark d-flex flex-column justify-content-center text-center text-xl-start pb-7">
            <h3 className="h2 fw-bold text-capitalize text-primary ms-1">
              Not sure yet?
            </h3>
            <h2 className="display-1 fw-bold">
              Discover why thousands choose our service!
            </h2>
          </div>
        </div>
        <div className="carousel slide" id="slider">
          <div className="carousel-indicators">
            <button
              className="active"
              data-bs-slide-to="0"
              data-bs-target="#slider"
            ></button>
            <button data-bs-slide-to="1" data-bs-target="#slider"></button>
            <button data-bs-slide-to="2" data-bs-target="#slider"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <div className="w-100 d-flex justify-content-center">
                <div className="testimonials__card card w-75 bg-light p-3 p-md-5 border-0 ">
                  <div className="card-body">
                    <p className="card-text fs-4 fs-md-3 text-center ">
                      &quot;Yourney exceeded my expectations with their
                      impeccable service and pristine car selection. The whole
                      experience was smooth and enjoyable. Highly
                      recommend!!&quot;
                    </p>
                    <div className="testimonials__customer d-flex justify-content-center align-items-center gap-4  my-5 ">
                      <img
                        src={testimonialGuy}
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                      <div className="testimonials__customer--text">
                        <h4 className="h3 fw-semibold">Dave Charles</h4>
                        <p className="h4 fw-normal">New York, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={example} alt="" className="d-block w-50" />
            </div>
            <div className="carousel-item ">
              <img src={example} alt="" className="d-block w-50" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#slider"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#slider"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
        </div>
      </div>
    </section>
  );
}
