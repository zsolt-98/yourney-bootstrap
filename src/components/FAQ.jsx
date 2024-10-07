export default function FAQ() {
  return (
    <section className="bg-light py-8">
      <div className="container-xl px-6 py-4">
        <div className="text-center text-dark mb-6">
          <h2 className="display-3 fw-bold text-capitalize mb-4">
            Frequently asked questions
          </h2>
          <p className="h2  fw-normal ">
            Everything you need to know for a seamless rental experience
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="accordion text-center" id="accordionExample">
              <div className="accordion-item text-dark">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-1 text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. What types of vehicles are available for rent at Yourney?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="fs-3">
                      At Yourney, we offer a diverse fleet of premium vehicles,
                      including luxury sedans, SUVs, convertibles, and sports
                      cars. Whether you&apos;re looking for a comfortable ride
                      for a business trip or a stylish vehicle for a special
                      occasion, we have options to suit your needs. All our cars
                      are meticulously maintained to ensure a top-notch driving
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item text-dark">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-1 text-dark collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    2. How does the booking process work?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="fs-3">
                      Booking with Yourney is simple and convenient. You can
                      browse our fleet online, select your desired vehicle, and
                      choose your rental dates. Once you’ve made your selection,
                      fill out the required information and complete the
                      payment. You&apos;ll receive a confirmation email with all
                      the details. If you have any special requests, feel free
                      to reach out to our customer service team, and we&apos;ll
                      do our best to accommodate you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item text-dark">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-1 text-dark collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. What are the insurance options available for rental
                    vehicles?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="fs-3">
                      We offer a variety of insurance options to ensure your
                      peace of mind while driving one of our vehicles. Basic
                      liability coverage is included with all rentals, but you
                      can also choose to add comprehensive insurance, collision
                      damage waiver, or personal accident insurance for
                      additional protection. Our customer service team is happy
                      to explain each option and help you select the best
                      coverage for your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
