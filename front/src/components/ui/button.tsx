import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

//hola 
const buttonVariants = cva(
  "inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-hero-orange text-primary-foreground shadow hover:bg-hero-blue",
        secundary:
            "bg-hero-blue text-primary-foreground shadow hover:bg-hero-orange",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-red-600 ",
        outlineGradient:
          "border  border-hero-blue text-hero-blue   rounded- bg-background shadow-sm hover:border-none hover:bg-content-gradient  hover:text-white",
        outline:
          "border border-hero-purple  text-hero-purple  hover:border hover:border-purple-700 hover:text-purple-700 hover:-bg-content-gradient",
        ghost: "border-2 text-hero-white border-hero-white  hover:bg-hero-white hover:text-hero-orange  ",
        link: "text-hero-black underline-offset-4 hover:underline hover:text-hero-orange her",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "")}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
