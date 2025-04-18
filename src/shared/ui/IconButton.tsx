import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconButton = cva(
    "transition-[border-color_color_background] flex justify-center items-center",
    {
        variants: {
            variant: {
                default: "hocus:text-purprle",
                outline: "rounded-full bg-transparent border border-",
                filled: "",
            },
            size: {
                small: ["text-sm", "py-1", "px-2"],
                medium: ["text-base", "py-2", "px-4"],
            },
            disabled: {
                false: null,
                true: ["opacity-50"],
            },
        },
        defaultVariants: {
            disabled: false,
            // variant: "primary",
            size: "medium",
        },
    }
);

export interface IconButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof iconButton> {}

export const IconButton: React.FC<IconButtonProps> = ({
    className,
    variant,
    size,
    disabled,
    ...props
}) => (
    <button
        className={iconButton({ variant, size, disabled, className })}
        disabled={disabled || undefined}
        {...props}
    />
);
