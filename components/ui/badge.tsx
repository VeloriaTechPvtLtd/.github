import * as React from "react"

const badgeVariants = {
  default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
  destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-sm",
  outline: "text-foreground border border-border hover:bg-accent hover:text-accent-foreground",
  success: "border-transparent bg-green-500 text-foreground hover:bg-green-600 shadow-sm",
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  
  const classes = `${baseClasses} ${badgeVariants[variant]} ${className}`
  
  return <div className={classes} {...props} />
}

export { Badge, badgeVariants }