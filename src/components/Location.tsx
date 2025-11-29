import { Card } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Find Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at our location in Manki, Gujjadi
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-4 md:p-8 bg-card overflow-hidden">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.6633699891963!2d74.66293807533141!3d13.67822188670604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc8d4d0f37e1c5%3A0xe50885d24d4a302e!2sShrimatha%20caterers%20Manki%20Gujjadi!5e0!3m2!1sen!2sin!4v1764177186009!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Matha Caterers Location"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-foreground font-semibold text-lg">Shri Matha Caterers</p>
              <p className="text-muted-foreground">Manki, Gujjadi, Karnataka</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;