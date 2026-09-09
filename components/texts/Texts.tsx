// Utils
import { cn } from "@utils/css";

interface TypographyComponentProps {
    children: React.ReactNode;
    className?: string;
    size?: string;
};

// #region Title

export const Title = ({
    children,
    size,
    className,
}: TypographyComponentProps) => {

    return (
        <span
            className={cn(
                className,
                "tracking-wide", // Font
                size ?? "text-xl",
            )}
        >
            {children}
        </span>
    );
};

// #endreion Title

// #region Text

export const Text = ({
    children,
    size,
    className,
}: TypographyComponentProps) => {

    return (
        <span
            className={cn(
                className,
                "tracking-wide", // Font
                size ?? "sm:text-sm", // Responsive
            )}
        >
            {children}
        </span>
    );
};

// #endreion Text