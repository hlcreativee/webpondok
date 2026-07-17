import * as React from "react";
import clsx from "clsx";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}

export const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    TextareaProps
>(
    ({ className, error = false, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                {...props}
                className={clsx(
                    `
                    min-h-28
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
                    resize-y
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

Textarea.displayName = "Textarea";