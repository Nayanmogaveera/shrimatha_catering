import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/fish_meal.png";
import heroImage2 from "@/assets/hero-food.jpg";
import heroImage3 from "@/assets/menu-biriyani.jpg";
import heroImage4 from "@/assets/neer_dose.png";

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 1000); // Match with CSS transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Smooth Transition */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Shri Matha Caterers - Chicken Biryani, Fish Fry, and Kebabs - Authentic South Indian Catering"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shri Matha Caterers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Manki, Gujjadi
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Exquisite vegetarian and non-vegetarian catering for all your special occasions. From traditional ceremonies to grand celebrations, we bring exceptional flavors to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe6_iuwBCmeELKTTZsMpBl51_VaEs_FyRH6Bd3Arv0Um0vXMg/viewform?usp=sharing&ouid=112100211612587863454", "_blank")}
              className="ripple-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Enquiry Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="ripple-button border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;