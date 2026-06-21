interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  footerLabel: string;
  color: "indigo" | "emerald" | "purple" | "amber";
  iconAnimated?: boolean;
}

const colorSchemes = {
  indigo: {
    icon: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    titleHover: "group-hover:text-indigo-300",
    footer: "text-indigo-400",
  },
  emerald: {
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    titleHover: "group-hover:text-emerald-300",
    footer: "text-emerald-400",
  },
  purple: {
    icon: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    titleHover: "group-hover:text-purple-300",
    footer: "text-purple-400",
  },
  amber: {
    icon: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    titleHover: "group-hover:text-amber-300",
    footer: "text-amber-400",
  },
};

export default function ServiceCard({ icon, title, description, footerLabel, color, iconAnimated }: ServiceCardProps) {
  const scheme = colorSchemes[color];

  return (
    <div className="border border-white/5 hover:border-white/10 bg-zinc-900/30 rounded-xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:translate-y-[-4px]">
      <div className="space-y-4">
        <div className={`w-10 h-10 ${scheme.icon} flex items-center justify-center rounded-lg text-lg ${iconAnimated ? 'animate-pulse' : ''}`}>
          {icon}
        </div>
        <h3 className={`text-base font-bold text-white ${scheme.titleHover} transition-colors font-sans`}>{title}</h3>
        <p className="text-xs text-zinc-400 leading-relaxed font-sans">{description}</p>
      </div>
      <div className={`pt-6 border-t border-white/5 mt-6 flex justify-between items-center text-xs font-semibold ${scheme.footer}`}>
        <span>{footerLabel}</span>
        <span>→</span>
      </div>
    </div>
  );
}
