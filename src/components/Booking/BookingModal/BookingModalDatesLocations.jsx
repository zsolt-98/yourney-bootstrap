import { useEffect, useState } from "react";
import useBookingStore from "../../../store/useBookingStore";

export default function BookingModalDatesLocations() {
  const { form } = useBookingStore();
  const [displayData, setDisplayData] = useState({
    pickUpDate: form.pickUpDate,
    dropOffDate: form.dropOffDate,
    pickUpPoint: form.pickUpPoint,
    dropOffPoint: form.dropOffPoint,
  });

  useEffect(() => {
    let timeoutDelay;
    // If any data is being removed (becoming empty/null), the update is delayed
    if (
      !form.pickUpDate ||
      !form.dropOffDate ||
      !form.pickUpPoint ||
      !form.dropOffPoint
    ) {
      timeoutDelay = setTimeout(() => {
        setDisplayData({
          pickUpDate: form.pickUpDate,
          dropOffDate: form.dropOffDate,
          pickUpPoint: form.pickUpPoint,
          dropOffPoint: form.dropOffPoint,
        });
      }, 800);
    } else {
      // If data is being added/changed, update is immediate
      setDisplayData({
        pickUpDate: form.pickUpDate,
        dropOffDate: form.dropOffDate,
        pickUpPoint: form.pickUpPoint,
        dropOffPoint: form.dropOffPoint,
      });
    }

    return () => {
      if (timeoutDelay) clearTimeout(timeoutDelay);
    };
  }, [form]);

  // Date display format for Rental Details (Dates & Times section)
  const formatDate = (date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="col-lg-12 col-xl-4">
      <div className="row border rounded p-3">
        <h3 className="fs-2 fw-semibold mb-3 text-capitalize">Dates & times</h3>
        <p className="fs-4 mb-2">
          <span className="fw-semibold">Pick-up:&nbsp;</span>
          <br />
          {formatDate(displayData.pickUpDate)} from 12:00 AM
        </p>
        <p className="fs-4 mb-3">
          <span className="fw-semibold">Drop-off:&nbsp;</span>
          <br />
          {formatDate(displayData.dropOffDate)} until 12:00 PM
        </p>
        <h3 className="fs-2 fw-semibold py-3 mb-0 text-capitalize border-top">
          Pick-up & drop-off location
        </h3>
        <p className="fs-4 mb-2">
          <span className="fw-semibold">Pick-up:&nbsp;</span>
          <br />
          {displayData.pickUpPoint?.address}, <br />
          {displayData.pickUpPoint?.postalCode}, <br />
          {displayData.pickUpPoint?.city}, {displayData.pickUpPoint?.country}
        </p>
        <p className="fs-4 mb-2">
          <span className="fw-semibold">Drop-off:&nbsp;</span>
          <br />
          {displayData.dropOffPoint?.address}, <br />
          {displayData.dropOffPoint?.postalCode}, <br />
          {displayData.dropOffPoint?.city}, {displayData.dropOffPoint?.country}
        </p>
      </div>
    </div>
  );
}
