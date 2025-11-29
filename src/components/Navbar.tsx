import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
    { name: "Location", id: "location" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Shri Matha Caterers
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link text-foreground hover:text-primary transition-all duration-300 font-medium relative py-1"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSe6_iuwBCmeELKTTZsMpBl51_VaEs_FyRH6Bd3Arv0Um0vXMg/viewform?usp=sharing&ouid=112100211612587863454",
                    "_blank"
                  )
                }
                className="heartbeat-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:scale-105 transition-all duration-300"
              >
                Enquiry Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground z-[60] relative p-3 rounded-md bg-background/90 backdrop-blur-sm border border-border/50 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-4 left-4 z-50 md:hidden animate-fade-in">
            <div className="bg-background border border-border rounded-lg shadow-2xl p-6 max-w-sm mx-auto">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-3 px-4 rounded-md hover:bg-muted/50 min-h-[44px]"
                  >
                    {link.name}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSe6_iuwBCmeELKTTZsMpBl51_VaEs_FyRH6Bd3Arv0Um0vXMg/viewform?usp=sharing&ouid=112100211612587863454",
                      "_blank"
                    );
                    setIsMobileMenuOpen(false);
                  }}
                  className="ripple-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full mt-2 min-h-[44px]"
                >
                  Enquiry Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
