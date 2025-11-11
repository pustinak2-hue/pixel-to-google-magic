import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pixel-hero.png";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-6xl uppercase tracking-tighter mb-4 md:text-8xl font-bold">
                <span className="text-primary glow-cyan">JAKUB</span>{" "}
                <span className="text-secondary glow-pink">PUSTINA</span>{" "}
                <span className="text-accent">DEVELOPER</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto">
              Bringing retro aesthetics to the modern web. Experience the beauty of 8-bit design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="default">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              View Gallery
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-8 flex-wrap">
            <div className="pixel-border bg-card p-4 rounded-none">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground uppercase">Artworks</div>
            </div>
            <div className="pixel-border bg-card p-4 rounded-none">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground uppercase">Artists</div>
            </div>
            <div className="pixel-border bg-card p-4 rounded-none">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground uppercase">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scanline effect */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
      </div>
    </section>;
};