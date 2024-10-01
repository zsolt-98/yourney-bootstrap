// import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Booking from "./components/Booking.jsx";
import Cards from "./components/Cards.jsx";
import Vehicles from "./components/Vehicles.jsx";

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
