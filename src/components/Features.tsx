import { PixelCard } from "./PixelCard";
import icon1 from "@/assets/pixel-icon-1.png";
import icon2 from "@/assets/pixel-icon-2.png";
import icon3 from "@/assets/pixel-icon-3.png";

export const Features = () => {
  const features = [
    {
      title: "Retro Design",
      description: "Experience the nostalgic charm of classic 8-bit and 16-bit graphics brought to life with modern web technologies.",
      icon: icon1,
    },
    {
      title: "Creative Tools",
      description: "Access powerful pixel art creation tools with an intuitive interface perfect for both beginners and professionals.",
      icon: icon2,
    },
    {
      title: "Community",
      description: "Join a vibrant community of pixel artists, share your creations, and get inspired by amazing artwork from around the world.",
      icon: icon3,
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">
            <span className="text-primary glow-cyan">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create stunning pixel art masterpieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <PixelCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
