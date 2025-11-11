import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PixelCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export const PixelCard = ({ title, description, icon, className }: PixelCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden rounded-none border-2 border-primary bg-card p-6 transition-all hover:scale-105 glow-cyan",
      className
    )}>
      <div className="mb-4">
        <img 
          src={icon} 
          alt={title}
          className="h-16 w-16 object-contain"
        />
      </div>
      <h3 className="mb-2 text-xl font-bold text-primary uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </Card>
  );
};
