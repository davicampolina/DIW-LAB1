import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "mono" | "cobalt" | "outline" | "status";
}

function Badge({ className, variant = "mono", ...props }: BadgeProps) {
  const variants = {
    mono: "font-mono text-xs bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-blue-500/40 hover:text-blue-200 transition-colors",
    cobalt:
      "font-mono text-xs bg-blue-600/15 text-blue-300 border border-blue-500/30 shadow-[inset_0_1px_0_0_rgba(147,197,253,0.15)]",
    outline:
      "font-mono text-xs bg-transparent text-zinc-400 border border-white/15",
    status:
      "font-mono text-[11px] uppercase tracking-wider bg-black/60 text-zinc-200 border border-white/10 backdrop-blur-md",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

