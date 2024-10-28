import { useState } from "react";
import vehiclesData from "../assets/data/vehiclesData.js";

import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Booking from "./Booking/Booking.jsx";
import Cards from "./Cards.jsx";
import Vehicles from "./Vehicles.jsx";
import Banner from "./Banner.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import Testimonials from "./Testimonials.jsx";
import FAQ from "./FAQ.jsx";
import DownloadApp from "./DownloadApp.jsx";
import Footer from "./Footer.jsx";

export default function Homepage() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehiclesData[0]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle((prevVehicle) => {
      if (prevVehicle !== vehicle) {
        setImageLoaded(false);
        return vehicle;
      }
      return prevVehicle;
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Nav />
      <Hero />
      <Booking selectedVehicle={selectedVehicle} modalOpen={isModalOpen} />
      <Cards />
      <Vehicles
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
        handleVehicleSelect={handleVehicleSelect}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
        toggleModal={toggleModal}
      />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <DownloadApp />
      <Footer />
    </>
  );
}
