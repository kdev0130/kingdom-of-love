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
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      )}

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 lg:px-8 py-32 ${centered ? "text-center" : ""}`}>
        <div className={`max-w-4xl ${centered ? "mx-auto" : ""}`}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-background/90 leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              {primaryCta && (
                <Link to={primaryCta.link} className="btn-kingdom">
                  {primaryCta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.link}
                  className="px-8 py-4 rounded-lg font-semibold text-base border-2 border-background text-background hover:bg-background hover:text-foreground transition-all duration-300"
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
