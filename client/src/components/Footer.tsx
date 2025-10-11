export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/r-hat-logo.png" alt="R-Hat" className="h-12 w-12" />
              <span className="text-xl font-bold text-foreground">R-Hat</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered AR guidance for hands-on engineers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-features">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-how">
                  How it Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('use-cases')} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-use-cases">
                  Use Cases
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-faq">
                  FAQ
                </button>
              </li>
              <li>
                <a href="mailto:farevalo6@gatech.edu" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-support">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:farevalo6@gatech.edu" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-email">
                  farevalo6@gatech.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} R-Hat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
