import testimonialGuy from "../assets/images/testimonial-guy-1.png";
import testimonialGirl1 from "../assets/images/testimonial-girl-1.png";
import testimonialGirl2 from "../assets/images/testimonial-girl-2.png";

import Testimonial from "./Testimonial.jsx";

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
              <Testimonial
                name="Dave Clark"
                location="New York, USA"
                photo={testimonialGuy}
              >
                &quot;Yourney exceeded my expectations with their impeccable
                service and pristine car selection. The whole experience was
                smooth and enjoyable. Highly recommend!&quot;
              </Testimonial>
            </div>
            <div className="carousel-item ">
              <Testimonial
                name="Lena Morozova"
                location="Moscow, Russia"
                photo={testimonialGirl1}
              >
                &quot;I treated myself to a luxury convertible for my birthday,
                and it was a dream! The staff was incredibly helpful, and
                driving the car was unforgettable. I’ll be renting from them
                again!&quot;
              </Testimonial>
            </div>
            <div className="carousel-item ">
              <Testimonial
                name="Zoey Lawson"
                location="London, UK"
                photo={testimonialGirl2}
              >
                &quot;Yourney makes luxury car rentals enjoyable and accessible.
                The booking was quick and easy, and the car was immaculate. A
                truly memorable experience and top-notch service!&quot;
              </Testimonial>
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
