import { useState } from "react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  backgroundImage: string;
  overlay?: boolean;
  centered?: boolean;
  size?: "full" | "medium" | "small";
}

const HeroSection = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = true,
  centered = true,
  size = "full",
}: HeroSectionProps) => {
  const [showAlert, setShowAlert] = useState(false);
  const sizeClasses = {
    full: "min-h-screen",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]",
  };

  return (
    <section
      className={`relative ${sizeClasses[size]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/75 to-foreground/85" />
      )}

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 lg:px-8 py-32 ${centered ? "text-center" : ""}`}>
        <div className={`max-w-4xl ${centered ? "mx-auto" : ""}`}>
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-background/90 leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              {primaryCta && (
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowAlert(true)}
                    onMouseLeave={() => setShowAlert(false)}
                    className="btn-kingdom w-auto"
                  >
                    {primaryCta.text}
                  </button>
                  {/* Alert */}
                  {showAlert && (
                    <div role="alert" className="alert alert-vertical sm:alert-horizontal absolute top-full left-1/2 -translate-x-1/2 mt-2 animate-in fade-in duration-300 w-80 z-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h3 className="font-bold">Coming Soon!</h3>
                        <div className="text-xs">Stay tune! KOLI is launching soon.</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.link}
                  className="btn-kingdom border-2 border-background bg-transparent text-background hover:bg-background hover:text-foreground w-auto"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {size === "full" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-background/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
