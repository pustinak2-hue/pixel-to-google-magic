export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary uppercase mb-4">Pixel Art Studio</h3>
            <p className="text-muted-foreground">
              Creating beautiful retro-inspired digital art for the modern web.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-secondary uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Home</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Gallery</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Community</li>
              <li className="hover:text-primary transition-colors cursor-pointer">About</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-accent uppercase mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Discord</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-primary transition-colors cursor-pointer">GitHub</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Pixel Art Studio. Built with{" "}
            <span className="text-secondary">♥</span> for retro enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};
