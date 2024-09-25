// import { useState } from "react";
import Nav from "./assets/components/Nav.jsx";
import Hero from "./assets/components/Hero.jsx";
import Booking from "./assets/components/Booking.jsx";
import Cards from "./assets/components/Cards.jsx";
import Vehicles from "./assets/components/Vehicles.jsx";

import "./App.scss";

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Booking></Booking>
      <Cards></Cards>
      <Vehicles></Vehicles>
    </>
  );
}

export default App;
