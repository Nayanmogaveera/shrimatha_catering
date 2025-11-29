import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import HowItWorks from "@/components/HowItWorks";
import Drinks from "@/components/Drinks";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <HowItWorks />
      <Drinks />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Location />
      <Footer />
      <LanguageToggle />
    </div>
  );
};

export default Index;