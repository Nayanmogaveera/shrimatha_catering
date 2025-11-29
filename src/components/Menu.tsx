import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import biriyaniImg from "@/assets/menu-biriyani.jpg";
import thaliImg from "@/assets/menu-thali.jpg";
import chickenImg from "@/assets/neer_dose.png";
import gheeRiceImg from "@/assets/menu-ghee-rice.jpg";
import { useRef, useState } from "react";

const menuCombos = [
  {
    name: "Classic Combo",
    image: thaliImg,
    items: [
      "Pickle",
      "Veg Palya",
      "2 Piece Kabab",
      "3 Idli",
      "Kundapura Chicken",
      "Boiled Rice",
      "Chatli Curry",
      "Payasa",
      "Ice Cream",
      "Water Bottle"
    ]
  },
  {
    name: "Neer Dosa Special",
    image: chickenImg,
    items: [
      "Pickle",
      "Veg Palya",
      "2 Piece Kabab",
      "2 Idli",
      "Kundapura Chicken",
      "2 Neer Dosa",
      "Chicken Sukka",
      "Boiled Rice",
      "Chatli Curry",
      "Payasa",
      "Ice Cream",
      "Water Bottle"
    ]
  },
  {
    name: "Sukka Delight",
    image: chickenImg,
    items: [
      "Pickle",
      "Veg Palya",
      "2 Piece Kabab",
      "Chicken Sukka",
      "3 Idli",
      "Kundapura Chicken",
      "Boiled Rice",
      "Chatli Curry",
      "Payasa",
      "Ice Cream",
      "Water Bottle"
    ]
  },
  {
    name: "Ghee Rice Combo",
    image: gheeRiceImg,
    items: [
      "Pickle",
      "Veg Palya",
      "2 Piece Kabab",
      "2 Idli",
      "Kundapura Chicken",
      "Ghee Rice",
      "Chicken Kurma Or Half Biriyani",
      "Boiled Rice",
      "Chatli Curry",
      "Payasa",
      "Ice Cream",
      "Water Bottle"
    ]
  },
  {
    name: "Premium Feast",
    image: thaliImg,
    items: [
      "Pickle",
      "Veg Palya",
      "2 Piece Kabab/Chicken Chilly/Chicken Pepper Dry",
      "2 Idli",
      "Kundapura Chicken",
      "Ghee Rice",
      "Chicken Kurma Or Half Biriyani",
      "Boiled Rice",
      "Chatli Curry",
      "Payasa",
      "Ice Cream/Fruit Salad",
      "Water Bottle"
    ]
  },
  {
    name: "Mutton Special",
    image: chickenImg,
    items: [
      "Pickle",
      "Veg Palya",
      "2 Piece Kabab/Fish Fry/Chicken Chilly",
      "2 Idli",
      "Kundapura Chicken",
      "2 Neer Dosa",
      "Chicken Sukka/Mutton Sukka",
      "Boiled Rice",
      "Chatli Curry",
      "Payasa",
      "Ice Cream",
      "Water Bottle"
    ]
  },
  {
    name: "Roti Combo",
    image: thaliImg,
    items: [
      "Pickle",
      "Veg Palya",
      "2 Piece Kabab/Fish Fry/Chicken Chilly",
      "Rumali Roti",
      "Kundapura Chicken/Butter Chicken/Mutton Curry",
      "2 Neer Dosa/Aapam/Set Dosa",
      "Chicken Sukka/Mutton Sukka",
      "Boiled Rice",
      "Chatli Curry",
      "Payasa",
      "Ice Cream",
      "Water Bottle"
    ]
  },
  {
    name: "Biriyani Special",
    image: biriyaniImg,
    items: [
      "2 Piece Kabab",
      "Full Biriyani",
      "Chicken Gravy with 2 piece",
      "Dahi Salad",
      "Payasa",
      "Ice Cream",
      "Water Bottle"
    ]
  }
];

const Menu = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted combo meals, each designed to delight your taste buds
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuCombos.map((combo, index) => (
            <Card 
              key={index} 
              className="smoke-effect group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card border-border/50 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div 
                className="absolute pointer-events-none z-20 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                  left: `${mousePosition.x - 64}px`,
                  top: `${mousePosition.y - 64}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={combo.image} 
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-foreground z-10 drop-shadow-lg">
                  {combo.name}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-2">
                  {combo.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-foreground/80 text-sm">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-sm mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {menuCombos.map((combo, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden bg-card border-border/50">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={combo.image} 
                        alt={combo.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-foreground z-10 drop-shadow-lg">
                        {combo.name}
                      </h3>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-2">
                        {combo.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-foreground/80 text-sm">
                            <span className="text-primary mt-1 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic text-sm max-w-xl mx-auto">
            * All combos can be customized according to your preferences and dietary requirements. Contact us for personalized menu options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
