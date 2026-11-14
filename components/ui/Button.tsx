import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-xs sm:text-sm px-6 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[var(--gold)] text-neutral-950 hover:bg-[var(--gold-light)] shadow-[0_2px_15px_rgba(198,164,92,0.3)] hover:shadow-[0_6px_25px_rgba(198,164,92,0.45)] hover:-translate-y-0.5",
    secondary:
      "bg-theme-surface text-theme-main border border-theme hover:border-[var(--gold)] hover:-translate-y-0.5 shadow-sm",
    outline:
      "bg-transparent text-theme-main border border-theme hover:border-[var(--gold)] hover:text-[var(--gold)]",
    glass:
      "bg-black/40 dark:bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all shadow-lg hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-theme-secondary hover:text-theme-main hover:bg-theme-secondary/50",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (href.startsWith("#") || href.startsWith("/")) {
      return (
        <Link href={href} className={combinedStyles}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
}

