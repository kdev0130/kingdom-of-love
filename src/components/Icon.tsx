interface IconProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  [key: string]: any;
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
  "2xl": "w-12 h-12",
  "3xl": "w-16 h-16",
};

export const Icon = ({ name, className = "", size = "md", ...props }: IconProps) => {
  return (
    <i
      className={`lni lni-${name} ${sizeMap[size as keyof typeof sizeMap]} ${className}`}
      {...props}
    />
  );
};

export default Icon;
