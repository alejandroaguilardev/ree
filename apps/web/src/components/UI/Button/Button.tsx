import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
    isLoading,
    leftIcon,
    rightIcon,
    variant = "default",
    size = "default",
    disabled,
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variantStyles = {
        default: "bg-blue-500 text-white hover:bg-blue-400",
        destructive: "bg-red-500 text-white hover:bg-red-400",
        outline: "border border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-900",
        secondary: "bg-gray-700 text-white hover:bg-gray-600",
        ghost: "hover:bg-gray-200 hover:text-gray-800",
        link: "text-blue-500 underline hover:text-blue-400",
    };
    const sizeStyles = {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

    return (
        <button
            className={classes}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading && <span className="mr-2 h-4 w-4 animate-spin">🔄</span>}
            {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
};

