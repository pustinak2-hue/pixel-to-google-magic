import { Button } from "@/components/ui/button";

export const Gallery = () => {
  // Placeholder colors for gallery items
  const galleryItems = [
    { color: "from-primary to-secondary" },
    { color: "from-secondary to-accent" },
    { color: "from-accent to-primary" },
    { color: "from-primary/80 to-secondary/80" },
    { color: "from-secondary/80 to-accent/80" },
    { color: "from-accent/80 to-primary/80" },
  ];

  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">
            <span className="text-secondary glow-pink">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore amazing pixel art creations from our community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square rounded-none border-2 border-primary bg-gradient-to-br transition-all hover:scale-105 hover:border-secondary glow-cyan cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))`,
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-4xl font-bold text-background/20 uppercase">
                  Art #{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary">
            View All Artworks
          </Button>
        </div>
      </div>
    </section>
  );
};
