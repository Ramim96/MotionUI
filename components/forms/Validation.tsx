// Utils
import { cn } from "@utils/css";

interface ValidationErrorComponentProps {
    error?: string;
};

export const ValidationError = ({ error }: ValidationErrorComponentProps) => {

    return (
        error &&
            <div className={cn("w-full wrap-break-word select-none")}>
                <span className={cn("text-red-500 sm:text-sm")}>{error}</span>
            </div>
    );
};