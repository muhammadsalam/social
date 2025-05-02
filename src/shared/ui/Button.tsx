import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
    "transition-[border-color_color_background] flex justify-center items-center gap-2 cursor-pointer rounded-full outline-none",
    {
        // className="border border-[#CBD5E1]"
        variants: {
            variant: {
                primary:
                    "bg-purple text-white px-4 h-10 border border-purple text-sm font-bold",
                transparent: "text-purple ",
            },
            disabled: {
                false: null,
                true: "opacity-50 cursor-default",
            },
            transition: {
                fill: "hocus:text-purple hocus:bg-white",
                transparing: "hocus:opacity-80 transition-[opacity]",
                filling:
                    "hocus:bg-purple hocus:text-white hocus:border-purple transition-[border-color_color_background]",
            },
        },
        defaultVariants: {
            disabled: false,
            variant: "transparent",
            transition: "transparing",
        },
        compoundVariants: [],
    }
);

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant,
    disabled,
    transition,
    ...props
}) => (
    <button
        className={button({ variant, disabled, transition, className })}
        disabled={disabled || undefined}
        {...props}
    />
);
