import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer",
          
          // Variants
          variant === "default" &&
            "bg-gradient-to-r from-[#00C8FF] to-[#168BFF] text-[#05070B] font-semibold shadow-[0_0_20px_-3px_rgba(0,200,255,0.4)] hover:shadow-[0_0_28px_0px_rgba(0,200,255,0.6)] hover:brightness-110",
          
          variant === "secondary" &&
            "bg-[#0D1420] text-[#00C8FF] border border-[#00C8FF]/30 hover:border-[#00C8FF] hover:bg-[#00C8FF]/10 shadow-[0_0_15px_-4px_rgba(0,200,255,0.2)]",
          
          variant === "outline" &&
            "border border-white/10 bg-transparent text-[#F8FAFC] hover:border-[#00C8FF]/50 hover:text-[#00C8FF] hover:bg-white/[0.03]",
          
          variant === "ghost" &&
            "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.05]",
          
          variant === "link" &&
            "text-[#00C8FF] underline-offset-4 hover:underline p-0 h-auto",
          
          // Sizes
          size === "default" && "h-10 px-5 py-2",
          size === "sm" && "h-8 rounded-md px-3 text-xs",
          size === "lg" && "h-12 rounded-xl px-7 text-base font-semibold",
          size === "icon" && "h-10 w-10 p-0",
          
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
