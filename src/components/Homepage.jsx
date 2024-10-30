import vehiclesData from "../assets/data/vehiclesData.js";

import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Booking from "./Booking/Booking.jsx";
import BookingModal from "./Booking/BookingModal/BookingModal.jsx";
import Cards from "./Cards.jsx";
import Vehicles from "./Vehicles.jsx";
import Banner from "./Banner.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import Testimonials from "./Testimonials.jsx";
import FAQ from "./FAQ.jsx";
import DownloadApp from "./DownloadApp.jsx";
import Footer from "./Footer.jsx";

export default function Homepage() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <Booking /> */}
      <BookingModal />
      <Cards />
      <Vehicles />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <DownloadApp />
      <Footer />
    </>
  );
}
