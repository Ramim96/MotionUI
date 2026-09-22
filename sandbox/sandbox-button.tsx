// Components
import { Button, IconButton, Link } from "@design-system/ui/buttons";
import { IconVariant } from "@design-system/icons/icon-variants";
// Utils
import { cn } from "../lib/utils/css";

export const SandboxButton = () => {

    return (
        <div className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2", // Positioning
                "w-full", // Box & sizing
            )}
        >
            {/* Regular buttons */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Regular buttons</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="danger-soft">Danger Soft</Button>
                </div>
            </div>
            {/* Disabled buttons */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Disabled buttons</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >   
                    <Button isDisabled>Primary</Button>
                    <Button variant="secondary" isDisabled>Secondary</Button>
                    <Button variant="tertiary" isDisabled>Tertiary</Button>
                    <Button variant="outline" isDisabled>Outline</Button>
                    <Button variant="ghost" isDisabled>Ghost</Button>
                    <Button variant="danger" isDisabled>Danger</Button>
                    <Button variant="danger-soft" isDisabled>Danger Soft</Button>
                </div>
            </div>
            {/* Sized buttons */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Sized buttons</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >   
                    <Button size="sm">Primary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="tertiary" size="md">Tertiary</Button>
                    <Button variant="outline" size="md">Outline</Button>
                    <Button variant="ghost" size="lg">Ghost</Button>
                    <Button variant="danger" size="lg">Danger</Button>
                    <Button variant="danger-soft" size="lg">Danger Soft</Button>
                </div>
            </div>
            {/* Icon buttons */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Sized buttons</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >   
                    <IconButton iconVariant={IconVariant.X} size="sm" ariaLabel={""} />
                    <IconButton iconVariant={IconVariant.X} variant="secondary" size="sm" ariaLabel={""} />
                    <IconButton iconVariant={IconVariant.X} variant="tertiary" size="md" ariaLabel={""} />
                    <IconButton iconVariant={IconVariant.X} variant="outline" size="md" ariaLabel={""} />
                    <IconButton iconVariant={IconVariant.X} variant="ghost" size="lg" ariaLabel={""} />
                    <IconButton iconVariant={IconVariant.X} variant="danger" size="lg" ariaLabel={""} />
                    <IconButton iconVariant={IconVariant.X} variant="danger-soft" size="lg" ariaLabel={""} />
                </div>
            </div>
            {/* Full width buttons */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Full width buttons</p>
                </div>
                <div className={cn(
                        "flex flex-col justify-center items-center gap-y-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >   
                    <Button fullWidth>Primary</Button>
                    <Button variant="secondary" fullWidth>Secondary</Button>
                    <Button variant="tertiary" fullWidth>Tertiary</Button>
                    <Button variant="outline" fullWidth>Outline</Button>
                    <Button variant="ghost" fullWidth>Ghost</Button>
                    <Button variant="danger" fullWidth>Danger</Button>
                    <Button variant="danger-soft" fullWidth>Danger Soft</Button>
                </div>
            </div>
            {/* Loading buttons */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Loading buttons</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >   
                    <Button isPending>Primary</Button>
                    <Button variant="secondary" isPending>Secondary</Button>
                    <Button variant="tertiary" isPending>Tertiary</Button>
                    <Button variant="outline" isPending>Outline</Button>
                    <Button variant="ghost" isPending>Ghost</Button>
                    <Button variant="danger" isPending>Danger</Button>
                    <Button variant="danger-soft" isPending>Danger Soft</Button>
                </div>
            </div>
            {/* Link buttons */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Link buttons</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >   
                    <Link href={"#"}>Primary</Link>
                    <Link href={"#"} underlineOffset={1}>Secondary</Link>
                    <Link href={"#"} underlineOffset={3}>Tertiary</Link>
                    <Link href={"#"} underlineOffset={4}>Outline</Link>
                    <Link href={"#"} noUnderline>Ghost</Link>
                    <Link href={"#"}>Danger</Link>
                    <Link href={"#"}>Danger Soft</Link>
                </div>
            </div>
        </div>
    );
};