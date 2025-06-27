import Blog from "./Components/UI/Blog";
import Footer from "./Components/UI/Footer";
import Hero from "./Components/UI/Hero";
import Navbar from "./Components/UI/Navbar";
import Pricing from "./Components/UI/Pricing";
import Services from "./Components/UI/Services";
import Silder from "./Components/UI/Silder";
import Solution from "./Components/UI/Solution";
import WhyChooseUs from "./Components/UI/WhyChooseUs";

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
      <Footer/>
    </div>
  );
}
