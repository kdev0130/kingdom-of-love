import { Link } from "react-router-dom";
import { useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [activePolicyAlert, setActivePolicyAlert] = useState<string | null>(null);
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-background/10">
                <img
                  src={logoIcon}
                  alt="Kingdom of Love International"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-sans text-lg font-bold">Kingdom of Love</h3>
                <span className="text-xs tracking-widest opacity-70 uppercase">
                  International
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              One Kingdom. One Love. One Abundance.
            </p>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-1">
            <h6 className="font-sans font-semibold text-lg mb-4">Navigation</h6>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/what-we-do" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                What We Do
              </Link>
              <Link to="/donate" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Donate Now
              </Link>
              <Link to="/koli" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                KOLI
              </Link>
            </div>
          </nav>

          {/* Visit KOLI Coin */}
          <nav className="lg:col-span-1">
            <h6 className="font-sans font-semibold text-lg mb-4">Visit KOLI Coin</h6>
            <div className="flex flex-col gap-3">
              <a href="/koli" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Explore KOLI
              </a>
              <a href="https://koli-coin.io/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                KOLI Platform
              </a>
            </div>
          </nav>

          {/* Policies */}
          <nav className="lg:col-span-1">
            <h6 className="font-sans font-semibold text-lg mb-4">Policies</h6>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <a 
                  href="#" 
                  onMouseEnter={() => setActivePolicyAlert("privacy")}
                  onMouseLeave={() => setActivePolicyAlert(null)}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity block"
                >
                  Privacy Policy
                </a>
                {activePolicyAlert === "privacy" && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white text-black text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="relative">
                <a 
                  href="#" 
                  onMouseEnter={() => setActivePolicyAlert("terms")}
                  onMouseLeave={() => setActivePolicyAlert(null)}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity block"
                >
                  Terms of Service
                </a>
                {activePolicyAlert === "terms" && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white text-black text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="relative">
                <a 
                  href="#" 
                  onMouseEnter={() => setActivePolicyAlert("cookie")}
                  onMouseLeave={() => setActivePolicyAlert(null)}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity block"
                >
                  Cookie Policy
                </a>
                {activePolicyAlert === "cookie" && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white text-black text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="relative">
                <a 
                  href="#" 
                  onMouseEnter={() => setActivePolicyAlert("disclaimer")}
                  onMouseLeave={() => setActivePolicyAlert(null)}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity block"
                >
                  Disclaimer
                </a>
                {activePolicyAlert === "disclaimer" && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white text-black text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Social */}
          <div>
            <h6 className="font-sans font-semibold text-lg mb-4">Connect With Us</h6>
            <div className="flex items-center gap-4 relative">
              {/* Telegram */}
              <a
                href="https://t.me/+rd5fNLu4zOhmMTg1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              {/* YouTube */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowAlert(true)}
                  onMouseLeave={() => setShowAlert(false)}
                  className="p-3 rounded-lg bg-background/10 hover:bg-background/20 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.07 0 12 0 12s0 3.93.379 5.814a3.016 3.016 0 002.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
                {/* Alert */}
                {showAlert && (
                  <div role="alert" className="alert alert-vertical sm:alert-horizontal absolute bottom-full left-0 mb-2 animate-in fade-in duration-300 w-80 z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Coming Soon!</h3>
                      <div className="text-xs">YouTube channel is coming soon</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Kingdom of Love International. All rights reserved.
            </p>
            <p className="text-sm font-sans italic opacity-80">
              One Kingdom. One Love. One Abundance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
