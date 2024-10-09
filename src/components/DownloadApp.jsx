import phoneApp from "../assets/images/app-section-phone.png";

export default function DownloadApp() {
  return (
    <section className="download bg-primary pt-8">
      <div className="container-xl px-5 px-xl-0 pt-4">
        <div className="row text-center text-xl-start gap-6 gap-xl-0">
          <div className="download__col--left col-xl-8 text-light">
            <div className="mt-0 mt-xl-6">
              <h3 className="h2 fw-bold text-capitalize text-secondary">
                Support
              </h3>
              <h2 className="display-1 fw-bold mb-5">
                Need further assistance?
              </h2>
              <p className="h2  fw-normal mb-5">
                Promptly track your travel metrics and manage your bookings
                without any fees. Control all your rental options and activate
                additional services as desired.
              </p>
              <p className="h2  fw-normal mb-5">
                Download the Yourney app from your device&#39;s app store.
              </p>
              <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-xl-start">
                <button className="btn btn-secondary btn-lg text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap">
                  Download app
                </button>
                <button className="btn btn-outline-secondary btn-lg text-secondary fs-2 fw-semibold text-capitalize text-nowrap">
                  About the app
                </button>
              </div>
            </div>
          </div>
          <div className="download__col--right col-xl-4 d-flex justify-content-center justify-content-xl-end">
            <img
              src={phoneApp}
              alt="phone application"
              className="img-fluid "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
