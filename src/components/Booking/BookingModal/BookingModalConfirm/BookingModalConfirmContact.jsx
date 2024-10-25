export default function BookingModalConfirmContact({
  icon,
  label,
  labelFor,
  name,
  id,
  type,
  pattern,
  title,
}) {
  return (
    <>
      <div className="booking__form--input fs-3 d-flex flex-column">
        <label htmlFor={labelFor} className="ms-3 mb-2">
          <span>{icon}</span> {label}
        </label>
        <input
          name={name}
          id={id}
          className="fs-4 p-3"
          type={type}
          minLength="2"
          maxLength={20}
          pattern={pattern}
          title={title}
        ></input>
      </div>
    </>
  );
}
