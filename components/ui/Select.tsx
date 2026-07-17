import * as React from "react";
import clsx from "clsx";

interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> { }

export function Select({
    className,
    children,
    ...props
}: SelectProps) {
    return (
        <select
            className={clsx(
                "flex h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none",
                "focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200",
                className
            )}
            {...props}
        >
            {children}
        </select>
    );
}