import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "matte" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary:
        "rounded-full bg-white text-black font-medium hover:bg-zinc-200 shadow-[0_0_25px_rgba(255,255,255,0.18)] transition-all duration-300 active:scale-[0.98]",
      matte:
        "rounded-full bg-white/[0.04] text-white border border-white/15 backdrop-blur-xl hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 active:scale-[0.98]",
      outline:
        "rounded-full bg-transparent text-zinc-200 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300",
      ghost:
        "rounded-full bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200",
    };

    const sizes = {
      default: "h-11 px-6 py-2.5 text-sm",
      sm: "h-9 px-4 py-1.5 text-xs",
      lg: "h-12 px-8 py-3 text-sm sm:text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

