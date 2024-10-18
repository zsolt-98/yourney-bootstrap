import { useState } from "react";

import vehiclesData from "./assets/data/vehiclesData.js";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Booking from "./components/Booking/Booking.jsx";
import Cards from "./components/Cards.jsx";
import Vehicles from "./components/Vehicles.jsx";
import Banner from "./components/Banner.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import DownloadApp from "./components/DownloadApp.jsx";
import Footer from "./components/Footer.jsx";

import "./App.scss";

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehiclesData[0]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle((prevVehicle) => {
      if (prevVehicle !== vehicle) {
        setImageLoaded(false);
        return vehicle;
      }
      return prevVehicle;
    });
  };

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Booking selectedVehicle={selectedVehicle}></Booking>
      <Cards></Cards>

      <Vehicles
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
        handleVehicleSelect={handleVehicleSelect}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
      ></Vehicles>

      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <DownloadApp></DownloadApp>
      <Footer></Footer>
    </>
  );
}

export default App;
