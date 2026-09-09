// Components
import { Button, LinkButton } from "@buttons/Button";
import { IconVariant } from "@icons/IconVariant";
// Utils
import { cn } from "@utils/css";

export const ButtonSandboxClient = () => {

    return (
        <div className={cn("flex flex-col gap-y-3")}>
            <div className={cn("flex gap-x-2 p-5")}>
                <Button
                    variant="primary"
                    iconVariant={IconVariant.ChartPie}
                >
                    Primary
                </Button>
                <Button
                    variant="secondary"
                    iconVariant={IconVariant.ChartPie}
                >
                    Secondary
                </Button>
                <Button
                    variant="destructive"
                    iconVariant={IconVariant.ChartPie}
                >
                    Destructive
                </Button>
                <LinkButton
                    href=""
                    className={cn(
                        "flex justify-center items-center gap-x-2 p-1", // Positioning
                        "text-light-100", // Font
                        "hover:underline hover:underline-offset-", // Effect
                    )}
                    iconVariant={IconVariant.ChartPie}
                    iconPosition="left"
                >
                    Link
                </LinkButton>
            </div>
        </div>
    );
};