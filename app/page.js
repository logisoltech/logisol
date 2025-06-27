import Blog from "./Components/UI/Blog";
import Footer from "./Components/UI/Footer";
import Hero from "./Components/UI/Hero";
import Navbar from "./Components/UI/Navbar";
import Pricing from "./Components/UI/Pricing";
import Services from "./Components/UI/Services";
import Silder from "./Components/UI/Silder";
import Solution from "./Components/UI/Solution";
import WhyChooseUs from "./Components/UI/WhyChooseUs";
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
      <Silder/>
      <Services/>
      <WhyChooseUs/>
      <Solution/>
      <Pricing/>
      <Blog/>
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
