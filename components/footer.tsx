export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Piyush Froster. All rights reserved.
            </p>
          </div>
          
          <div>
            <p className="text-muted-foreground text-sm">
              Built with <span className="text-primary">♥</span> using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}