export default function VehiclesSelectButton({ children }) {
  return (
    <>
      <button
        className={
          "btn btn-primary btn-md text-white border-0 fs-2 fw-semibold text-capitalize text-nowrap"
        }
      >
        {children}
      </button>
    </>
  );
}
