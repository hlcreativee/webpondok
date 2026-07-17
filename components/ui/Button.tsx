import * as React from "react";
import clsx from "clsx";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
}

export function Button({
    className,
    variant = "default",
    size = "md",
    loading = false,
    children,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled || loading}
            className={clsx(
                "inline-flex items-center justify-center rounded-xl font-semibold transition-all",

                variant === "default"
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "border border-gray-300 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700",

                size === "sm" && "h-9 px-3 text-sm",
                size === "md" && "h-11 px-4 text-sm",
                size === "lg" && "h-12 px-6 text-base",

                className
            )}
        >
            {loading ? "Loading..." : children}
        </button>
    );
}