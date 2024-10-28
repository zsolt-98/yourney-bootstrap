import { create } from "zustand";

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
    showDetails: false,
    isDetailsVisible: false,
    isAnimating: false,
    isFormValid: true,
    detailsButtonClicked: false,
  },

  // Selected vehicle
  selectedVehicle: null,

  // Actions
  setPickUpPoint: (point) =>
    set((state) => ({
      form: {
        ...state.form,
        pickUpPoint: point,
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

  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),

  setFormUIState: (updates) =>
    set((state) => ({
      formUI: {
        ...state.formUI,
        ...updates,
      },
    })),

  resetForm: () =>
    set((state) => ({
      form: {
        pickUpPoint: "",
        dropOffPoint: "",
        pickUpDate: "",
        dropOffDate: "",
      },
      formUI: {
        showDetails: false,
        isDetailsVisible: false,
        isAnimating: false,
        isFormValid: true,
        detailsButtonClicked: false,
      },
    })),
}));

export default useBookingStore;
