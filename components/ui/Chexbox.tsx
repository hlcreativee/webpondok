import * as React from "react";
import clsx from "clsx";

interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Checkbox({
    className,
    ...props
}: CheckboxProps) {
    return (
        <input
            type="checkbox"
            className={clsx(
                "h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500",
                className
            )}
            {...props}
        />
    );
}