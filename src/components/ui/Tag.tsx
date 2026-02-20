import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagVariant = "default" | "primary" | "muted" | "success" | "warning";

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  className?: string;
  onClick?: () => void;
  role?: string;
  "aria-pressed"?: boolean;
}

const variantStyles: Record<TagVariant, string> = {
  default: "bg-primary-light text-primary border border-transparent hover:border-primary/20",
  primary: "bg-primary text-primary-foreground",
  muted: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning/15 text-warning-foreground",
};

export function Tag({ children, variant = "default", className, onClick, ...rest }: TagProps) {
  return (
    <span
      className={cn(
        "tag-base transition-colors",
        variantStyles[variant],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </span>
  );
}
