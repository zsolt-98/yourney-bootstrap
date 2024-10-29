import { create } from "zustand";
import vehiclesData from "../assets/data/vehiclesData";

const useBookingStore = create((set) => ({
  // Form state
  form: {
    pickUpPoint: "",
    dropOffPoint: "",
    pickUpDate: "",
    dropOffDate: "",
  },

  // Form UI state
  formUI: {
    isFormValid: true,
    detailsButtonClicked: false,
    isModalOpen: false,
  },

  // Vehicle state
  vehicle: {
    selected: vehiclesData[0],
  },

  // Actions
  setPickUpPoint: (point) =>
    set((state) => ({
      form: {
        ...state.form,
        pickUpPoint: point,
      },
    })),

  setDropOffPoint: (point) =>
    set((state) => ({
      form: {
        ...state.form,
        dropOffPoint: point,
      },
    })),

  setPickUpDate: (date) =>
    set((state) => ({
      form: {
        ...state.form,
        pickUpDate: date,
      },
    })),

  setDropOffDate: (date) =>
    set((state) => ({
      form: {
        ...state.form,
        dropOffDate: date,
      },
    })),

  setFormUIState: (updates) =>
    set((state) => ({
      formUI: {
        ...state.formUI,
        ...updates,
      },
    })),

  setSelectedVehicle: (vehicle) =>
    set((state) => ({
      vehicle: {
        ...state.vehicle,
        selected: vehicle,
      },
    })),

  toggleModal: () =>
    set((state) => ({
      vehicle: {
        ...state.formUI,
        isModalOpen: !state.vehicle.isModalOpen,
      },
    })),

  resetForm: () =>
    set(
      () => ({
        form: {
          pickUpPoint: "",
          dropOffPoint: "",
          pickUpDate: "",
          dropOffDate: "",
        },
        formUI: {
          isFormValid: true,
          detailsButtonClicked: false,
          isModalOpen: false,
        },
      }),
      false,
      "resetForm"
    ),
}));

export default useBookingStore;
