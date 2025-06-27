import Hero from "./Components/UI/Hero";
import Navbar from "./Components/UI/Navbar";
import Footer from "./Components/UI/Footer";
import AboutUs from "./Components/UI/AboutUs";
import Facts from "./Components/UI/Facts";
import Work from "./Components/UI/Work";
import Testimonials from "./Components/UI/Testimonials";
import FAQs from "./Components/UI/FAQs";
import Collaborate from "./Components/UI/Collaborate";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Facts/>
      <Work/>
      <Testimonials/>
      <FAQs/>
      <Collaborate/>
      <Footer/>
    </div>
  );
}
