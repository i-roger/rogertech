import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function SectionTitle({ children, as: Tag = "h2", className = "" }: SectionTitleProps) {
  return (
    <Tag className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight ${className}`}>
      {children}
    </Tag>
  );
}
