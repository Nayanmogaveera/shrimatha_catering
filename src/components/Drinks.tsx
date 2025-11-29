import { Card } from "@/components/ui/card";
import mojitoClassic from "@/assets/mojito-classic.jpg";
import mojitoStrawberry from "@/assets/mojito-strawberry.jpg";
import mojitoBlue from "@/assets/mojito-blue.jpg";
import mojitoMango from "@/assets/mojito-mango.jpg";
import mojitoWatermelon from "@/assets/mojito-watermelon.jpg";
import { GlassWater } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const drinks = [
  {
    name: "Classic Mojito",
    description: "Fresh mint leaves, lime juice, and sparkling water",
    category: "Mojito",
    image: mojitoClassic,
    color: "from-green-500/20 to-lime-400/20"
  },
  {
    name: "Strawberry Mojito",
    description: "Sweet strawberries blended with mint and lime",
    category: "Mojito",
    image: mojitoStrawberry,
    color: "from-pink-500/20 to-rose-400/20"
  },
  {
    name: "Blue Lagoon Mojito",
    description: "Tropical blue curaçao with refreshing mint",
    category: "Mojito",
    image: mojitoBlue,
    color: "from-cyan-500/20 to-blue-400/20"
  },
  {
    name: "Virgin Mojito",
    description: "Non-alcoholic refreshing lime and mint cooler",
    category: "Mojito",
    image: mojitoClassic,
    color: "from-emerald-500/20 to-green-400/20"
  },
  {
    name: "Mango Mojito",
    description: "Tropical mango pulp with fresh mint and lime",
    category: "Mojito",
    image: mojitoMango,
    color: "from-yellow-500/20 to-orange-400/20"
  },
  {
    name: "Watermelon Mojito",
    description: "Refreshing watermelon with mint and citrus",
    category: "Mojito",
    image: mojitoWatermelon,
    color: "from-red-500/20 to-pink-400/20"
  }
];

const Drinks = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    let velocity = 1.2; // Increased base speed
    let time = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        time += 0.016; // Approximately 60fps
        // Add easing for smoother, more aesthetic movement
        const easeSpeed = Math.sin(time * 0.5) * 0.3 + velocity;
        scrollPosition += easeSpeed;
        
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
    <section id="drinks" className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GlassWater className="w-10 h-10 text-primary animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Drinks & Refreshments
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium mojitos and refreshing beverages to complement your celebration
          </p>
        </div>

        {/* Circular Scrolling Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* First set of cards */}
          {drinks.map((drink, index) => (
            <Card 
              key={`first-${index}`}
              className={`group flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${drink.color} border-border/50 relative`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={drink.image} 
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <GlassWater className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
                    {drink.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {drink.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {drink.description}
                </p>

                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </Card>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {drinks.map((drink, index) => (
            <Card 
              key={`second-${index}`}
              className={`group flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${drink.color} border-border/50 relative`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={drink.image} 
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <GlassWater className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
                    {drink.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {drink.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {drink.description}
                </p>

                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            All drinks can be customized to your preferences • Available in various serving sizes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Drinks;
