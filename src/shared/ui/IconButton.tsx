import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconButton = cva(
    "transition-[border-color_color_background] flex justify-center items-center cursor-pointer rounded-full outline-none",
    {
        // className="border border-[#CBD5E1]"
        variants: {
            variant: {
                default: "hocus:text-purprle",
                outline: "bg-transparent border border-[#CBD5E1]",
                transparent: "text-lightgray",
            },
            disabled: {
                false: null,
                true: "opacity-50 cursor-default",
            },
            transition: {
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
        compoundVariants: [
            {
                variant: "outline",
                transition: "filling",
                class: "size-10",
            },
        ],
    }
);

export interface IconButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof iconButton> {}

export const IconButton: React.FC<IconButtonProps> = ({
    className,
    variant,
    disabled,
    transition,
    ...props
}) => (
    <button
        className={iconButton({ variant, disabled, transition, className })}
        disabled={disabled || undefined}
        {...props}
    />
);
