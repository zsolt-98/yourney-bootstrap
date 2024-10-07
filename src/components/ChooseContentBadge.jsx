export default function ChooseContentBadge({ imgSrc, children }) {
  return (
    <div className="d-flex gap-4 align-items-center">
      <span>
        <img src={imgSrc} alt="" />
      </span>
      <div className="d-flex flex-column gap-2">{children}</div>
    </div>
  );
}
