interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  titleColor?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  light = false,
  titleColor,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`gold-line mb-6 ${centered ? "mx-auto" : ""}`} />
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          titleColor ? "" : (light ? "text-background" : "text-foreground")
        }`}
        style={titleColor ? { color: titleColor } : undefined}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-background/80" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
