import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import Offers from "./pages/Offers";
import OurSpaces from "./pages/OurSpaces";
import Rooms from "./pages/Rooms";
import Testemonials from "./pages/Testemonials";

function App() {
  return (
    <div className="font-serif ">
      <Navbar />
      <Hero />
      <BookingForm />
      <AboutUs />
      <Rooms />
      <Offers />
      <OurSpaces />
      <Testemonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
