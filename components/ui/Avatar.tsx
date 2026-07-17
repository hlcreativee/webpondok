import * as React from "react";
import clsx from "clsx";

interface AvatarProps
    extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
}

export function Avatar({
    src,
    alt,
    className,
}: AvatarProps) {
    if (src) {
        return (
            <img
                src={src}
                alt={alt}
                className={clsx(
                    "h-10 w-10 rounded-full object-cover",
                    className
                )}
            />
        );
    }

    return (
        <div
            className={clsx(
                "h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-semibold",
                className
            )}
        >
            ?
        </div>
    );
}