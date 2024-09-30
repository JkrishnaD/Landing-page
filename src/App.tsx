// import './App.css'

import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Logos } from "./components/Logos";
import { Pricing } from "./components/Pricing";

import { Product } from "./components/Product";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="h-full bg-[#EAEEFE]">
      <Header />
      <HeroSection />
      <Logos />
      <Product />
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
