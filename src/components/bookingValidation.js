import * as Yup from "yup";

export const bookingValidationSchema = Yup.object({
  pickUpPoint: Yup.string().required("Pick-up location is required"),
  dropOffPoint: Yup.string().required("Drop-off location is required"),
  pickUpDate: Yup.date()
    .required("Pick-up date is required")
    .min(new Date(), "Pick-up date cannot be in the past"),
  dropOffDate: Yup.date()
    .required("Drop-off date is required")
    .min(Yup.ref("pickUpDate"), "Drop-off date must be after pick-up date"),
});

export const initialValues = {
  pickUpPoint: "",
  dropOffPoint: "",
  pickUpDate: "",
  dropOffDate: "",
};
