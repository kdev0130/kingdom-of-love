import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Donate Now", path: "/donate" },
    { name: "KOLI", path: "/koli" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <img
                src={logoIcon}
                alt="Kingdom of Love International"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="block">
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                The
              </span>
              <h1 className="font-serif text-lg font-bold leading-tight text-foreground">
                Kingdom of Love
              </h1>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                International
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link py-2 text-sm tracking-wide uppercase ${
                  isActive(link.path)
                    ? "text-foreground after:scale-x-100"
                    : ""
                }`}
                style={link.name === "KOLI" ? { color: "rgb(229, 137, 10)" } : {}}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ stroke: "#9D5C0D" }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-md border-b border-border z-50">
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <div key={link.path} className="px-4">
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`nav-link inline-block py-3 text-sm tracking-wide uppercase transition-colors ${
                      isActive(link.path) ? "after:scale-x-100" : ""
                    }`}
                    style={
                      link.name === "KOLI"
                        ? { color: "rgb(229, 137, 10)", fontWeight: "600" }
                        : { color: "#1a1a1a", fontWeight: "500" }
                    }
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
