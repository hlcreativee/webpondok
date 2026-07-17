import * as React from "react";
import clsx from "clsx";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error = false, ...props }, ref) => {
        return (
            <input
                ref={ref}
                {...props}
                className={clsx(
                    `
                    flex
                    h-11
                    w-full
                    rounded-xl
                    border
                    bg-background
                    text-foreground
                    placeholder:text-muted-foreground
                    px-3
                    py-2
                    text-sm
                    outline-none
                    transition-colors
                    `,
                    error
                        ? `
                        border-destructive
                        focus:ring-2
                        focus:ring-destructive/40
                        `
                        : `
                        border-input
                        focus:ring-2
                        focus:ring-ring
                        `,
                    className
                )}
            />
        );
    }
);

Input.displayName = "Input";