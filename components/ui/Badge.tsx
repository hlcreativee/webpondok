import * as React from "react";
import clsx from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "secondary" | "outline";
}

export function Badge({
    variant = "default",
    className,
    ...props
}: BadgeProps) {
    return (
        <span
            className={clsx(
                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                {
                    "bg-emerald-600 text-white": variant === "default",
                    "bg-gray-200 text-gray-800": variant === "secondary",
                    "border border-gray-300 text-gray-700":
                        variant === "outline",
                },
                className
            )}
            {...props}
        />
    );
}