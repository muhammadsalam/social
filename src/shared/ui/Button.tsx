import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("flex items-center justify-center gap-2", {
    variants: {
        variant: {
            primary: [""],
        },
        disabled: {
            false: null,
            true: ["opacity-50", "cursor-default"],
        },
    },
    defaultVariants: {
        disabled: false,
    },
});

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
    className,
    disabled,
    ...props
}) => (
    <button
        className={button({ disabled, className })}
        disabled={disabled || undefined}
        {...props}
    />
);
