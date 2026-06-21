import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  color?: "indigo" | "emerald" | "gold";
}

const colorStyles = {
  indigo: "border-indigo-500/20 bg-indigo-500/5 text-indigo-400",
  emerald: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
  gold: "border-amber-500/20 bg-amber-500/5 text-amber-400"
};

export default function SectionBadge({ children, color = "indigo" }: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center space-x-2 border ${colorStyles[color]} px-4 py-1 rounded-full text-xs font-mono`}>
      <span>{children}</span>
    </div>
  );
}
