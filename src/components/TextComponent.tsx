import React from "react";

interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
  size?: string;
  fontWeight?: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  color,
  size,
  fontWeight,
  className,
}) => {
  return (
    <p
      style={{
        color,
        fontSize: size,
        fontWeight,
        textAlign: "center",
        ...style,
      }}
      className={className}
    >
      {children}
    </p>
  );
};

export default Text;
