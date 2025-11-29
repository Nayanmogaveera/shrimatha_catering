import { Card } from "@/components/ui/card";
import aboutVideo from "@/assets/WhatsApp Video 2025-11-29 at 11.08.29 AM.mp4";
// import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/reddress.png";
import gallery3 from "@/assets/grey_Shirt.png";
import gallery4 from "@/assets/bluedress.png";
import gallery5 from "@/assets/blue2.png";
import gallery6 from "@/assets/pink_dress.png";
import gallery7 from "@/assets/shed.png";
import { Award, Users, Utensils } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  // { src: gallery1, alt: "Wedding catering event" },
  { src: gallery2, alt: "Corporate event catering" },
  { src: gallery3, alt: "Traditional celebration feast" },
  { src: gallery4, alt: "Coastal Karnataka wedding feast" },
  { src: gallery5, alt: "Mangalorean chicken sukka with neer dosa" },
  { src: gallery6, alt: "Coastal fish fry platter" },
  { src: gallery7, alt: "Authentic chicken biryani" },
];

const AboutUs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Shri Matha Caterers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Veg and Non-Veg Cuisine for All Your Special Occasions
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <video
              src={aboutVideo}
              className="w-full h-[480px] object-cover rounded-lg shadow-xl shadow-white-400/70 filter brightness-150"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-6 animate-fade-in">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Shri Matha Caterers, Manki, Gujjadi. We are a premier catering service specializing in authentic coastal Karnataka cuisine. With years of experience in the industry, we take pride in delivering exceptional culinary experiences for weddings, corporate events, and special celebrations.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our team of skilled chefs brings traditional recipes to life with the finest ingredients, creating memorable dining experiences that reflect the rich culinary heritage of the Karnataka coast. From traditional thalis to biriyani feasts, every dish is prepared with care and authenticity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Quality Service</h3>
                <p className="text-sm text-muted-foreground">Premium ingredients & authentic recipes</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Experienced chefs & staff</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Custom Menus</h3>
                <p className="text-sm text-muted-foreground">Tailored to your needs</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Gallery - Continuous Scrolling */}
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="text-center mb-8 animate-fade-in">
            <h3 className="text-3xl font-bold inline-block relative">
              Our Gallery
              <span className="block h-1 w-34 bg-orange-400 rounded-full mx-auto mt-2" />
            </h3>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* First set */}
            {galleryImages.map((image, index) => (
              <Card
                key={`first-${index}`}
                className="flex-shrink-0 w-[460px] overflow-hidden rounded-xl bg-background/80 backdrop-blur"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover filter brightness-125"
                  />
                </div>
              </Card>
            ))}

            {/* Duplicate set for seamless loop */}
            {galleryImages.map((image, index) => (
              <Card
                key={`second-${index}`}
                className="flex-shrink-0 w-[460px] overflow-hidden rounded-xl bg-background/80 backdrop-blur"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover filter brightness-125"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
