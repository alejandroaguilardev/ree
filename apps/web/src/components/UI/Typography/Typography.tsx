interface TypographyProps {
    variant?: "h1" | "h2" | "h3" | "body" | "caption" | "subheading";
    color?: string;
    className?: string;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
    variant = "body",
    color = "text-black",
    className,
    children,
}) => {
    const variants = {
        h1: "text-4xl font-bold leading-tight",
        h2: "text-3xl font-semibold leading-tight",
        h3: "text-2xl font-semibold leading-snug",
        body: "text-base leading-relaxed",
        caption: "text-sm text-gray-500",
        subheading: "text-lg font-medium leading-normal",
    };

    const classes = `${variants[variant]} ${color} ${className}`;

    return <p className={classes}>{children}</p>;
};

export default Typography;
