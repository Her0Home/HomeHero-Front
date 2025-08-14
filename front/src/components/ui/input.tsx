import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, id, ...props }, ref) => {
    const describedBy = error ? `${id}-error` : undefined;

    return (
      <div className="flex flex-col w-full gap-1">
        <input
          type={type}
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error ? "border-red-500 focus-visible:ring-red-500" : "border-input",
            className
          )}
          {...props}
        />
        {error && (
          <p id={describedBy} className="text-hero-orange text-sm mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
