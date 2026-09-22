import Image from "next/image";
import Link from "next/link";
// Utils
import { cn } from "../../lib/utils/css";

interface MotionLogoComponentProps {
    className?: string;
};

export const Logo = ({ className }: MotionLogoComponentProps) => {

    return (
        <Link
            href="/"
            className={cn("flex justify-center items-center gap-x-1")}
        >
            <Image
                src="/assets/logo/motion-logo-512x512.png"
                alt="Motion"
                width={35}
                height={35}
                loading="eager"
                className={cn(className)}
            />
        </Link>
    );
};