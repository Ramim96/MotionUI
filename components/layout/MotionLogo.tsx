import Image from "next/image";
import Link from "next/link";
// Components
import { Title } from "@text/Texts";
// Utils
import { cn } from "@utils/css";

interface MotionLogoComponentProps {
    className?: string;
};

export const MotionLogo = ({ className }: MotionLogoComponentProps) => {

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
            <Title className={cn("text-white-50")}>
                otion
            </Title>
        </Link>
    );
};