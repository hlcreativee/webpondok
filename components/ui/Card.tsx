import * as React from "react";
import clsx from "clsx";

export function Card({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={clsx(
                `
                rounded-2xl
                border
                border-border
                bg-card
                text-card-foreground
                shadow-sm
                `,
                className
            )}
            {...props}
        />
    );
}


export function CardHeader({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={clsx(
                `
                p-6
                border-b
                border-border
                `,
                className
            )}
            {...props}
        />
    );
}


export function CardTitle({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={clsx(
                `
                text-xl
                font-bold
                text-card-foreground
                `,
                className
            )}
            {...props}
        />
    );
}


export function CardDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={clsx(
                `
                text-sm
                mt-2
                text-muted-foreground
                `,
                className
            )}
            {...props}
        />
    );
}


export function CardContent({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={clsx(
                `
                p-6
                `,
                className
            )}
            {...props}
        />
    );
}


export function CardFooter({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={clsx(
                `
                p-6
                border-t
                border-border
                `,
                className
            )}
            {...props}
        />
    );
}