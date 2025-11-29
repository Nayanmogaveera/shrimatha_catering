import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, ChefHat, PartyPopper } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HowItWorks = () => {
  const steps = [
    { icon: Phone, title: "ENQUIRE", description: "Customer enquires via form or call" },
    { icon: MessageSquare, title: "DISCUSS & PLAN", description: "We discuss menu, date, and guest details" },
    { icon: ChefHat, title: "WE CATER", description: "Our team prepares and serves delicious food" },
    { icon: PartyPopper, title: "ENJOY EVENT", description: "Customers enjoy the event stress-free" },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [maxVisibleIndex, setMaxVisibleIndex] = useState(-1); // highest step visible in order

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLDivElement>("[data-step-card]")
    );

    const observer = new IntersectionObserver(
      (entries, obs) => {
        let hasUpdated = false;

        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute("data-index");
          if (indexAttr == null) return;
          const index = parseInt(indexAttr, 10);

          if (entry.isIntersecting) {
            // reveal cards in sequence once
            setMaxVisibleIndex((prev) => {
              if (index === prev + 1) {
                hasUpdated = true;
                return index;
              }
              return prev;
            });
          }
        });

        // when the last card has been shown, stop observing (animation will never reset)
        if (hasUpdated) {
          setTimeout(() => {
            if (maxVisibleIndex + 1 >= steps.length - 1) {
              obs.disconnect();
            }
          }, 0);
        }
      },
      { threshold: 0.4 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [steps.length, maxVisibleIndex]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to make your event memorable
          </p>
        </div>

        <div className="max-w-6xl mx-auto" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const isVisible = index <= maxVisibleIndex;

              return (
                <div
                  key={index}
                  data-step-card
                  data-index={index}
                  style={{
                    // slow stagger from bottom: first card, then second, etc.
                    transitionDelay: `${index * 250}ms`,
                  }}
                  className={`
                    relative
                    transform
                    transition-transform
                    transition-opacity
                    duration-1000
                    ease-out
                    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
                  `}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-secondary"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
