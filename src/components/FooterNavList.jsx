export default function FooterNavList({ header, children }) {
  return (
    <nav className="col-6 d-flex justify-content-evenly justify-content-lg-end text-capitalize">
      <div className="d-flex flex-column gap-4">
        <h5 className="h1 fw-semibold">{header}</h5>
        <ul className="footer__list list-unstyled fs-4 d-flex flex-column gap-4">
          {children}
        </ul>
      </div>
    </nav>
  );
}
