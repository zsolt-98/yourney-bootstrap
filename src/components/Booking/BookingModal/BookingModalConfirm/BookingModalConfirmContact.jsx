export default function BookingModalConfirmContact({
  icon,
  label,
  labelFor,
  name,
  id,
  type,
  pattern,
  title,
  required,
  placeholder,
  span,
  disabled,
}) {
  return (
    <>
      <div className="booking__form--input fs-3 d-flex flex-column mb-4">
        <label htmlFor={labelFor} className="ms-1 mb-2">
          <span>{icon}</span> {label} {span}
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
          required={required}
          placeholder={placeholder}
          disabled={disabled}
        ></input>
      </div>
    </>
  );
}
