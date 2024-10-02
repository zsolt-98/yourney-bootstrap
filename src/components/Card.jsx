export default function Card({ image, bgColor, textColor, children }) {
  return (
    <>
      <div
        className={`cards__card card ${bgColor} p-5 ${textColor} align-items-center justify-content-evenly gap-3 text-center`}
      >
        <div className="card__image--container">
          <img src={image} className=" w-75" alt="" />
        </div>
        {children}
      </div>
    </>
  );
}
