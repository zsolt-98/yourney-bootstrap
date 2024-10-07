export default function Testimonial({ photo, name, location, children }) {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="testimonials__card card w-75 bg-light p-3 p-md-5 border-0 ">
        <div className="card-body">
          <p className="card-text fs-4 fs-md-3 text-center ">{children}</p>
          <div className="testimonials__customer d-flex justify-content-center align-items-center gap-4  my-5 ">
            <img src={photo} alt="" className="rounded-circle img-fluid" />
            <div className="testimonials__customer--text">
              <h4 className="h3 fw-semibold">{name}</h4>
              <p className="h4 fw-normal">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
