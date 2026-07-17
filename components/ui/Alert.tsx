import * as React from "react";
import clsx from "clsx";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "success" | "warning" | "error";
}

export function Alert({
    variant = "default",
    className,
    ...props
}: AlertProps) {
    return (
        <div
            className={clsx(
                "rounded-xl border p-4 text-sm",
                {
                    "bg-gray-50 border-gray-200": variant === "default",
                    "bg-green-50 border-green-200 text-green-700":
                        variant === "success",
                    "bg-yellow-50 border-yellow-200 text-yellow-700":
                        variant === "warning",
                    "bg-red-50 border-red-200 text-red-700":
                        variant === "error",
                },
                className
            )}
            {...props}
        />
    );
}