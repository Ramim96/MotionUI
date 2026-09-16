"use client";

import { useState } from "react";
// Components
import { IconVariant } from "@icons/IconVariant";
import { Switch, SwitchGroup } from "@components/switch/Switch";
// Utils
import { cn } from "@utils/css";

export const SandboxSwitch = () => {

    const [selected, setSelected] = useState(false);

    return (
        <div className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2", // Positioning
                "w-full", // Box & sizing
            )}
        >
            {/* Regular switch */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Regular switch</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <Switch
                        name="test"
                    />
                </div>
            </div>
            {/* Generic icon switch */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Generic icon switch</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <Switch
                        name="test"
                        iconVariantGeneric={IconVariant.AlarmClock}
                        size="lg"
                    />
                </div>
            </div>
            {/* Selected icon switch */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Selected icon switch</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <Switch
                        name="test"
                        iconVariantSelected={IconVariant.Check}
                        iconVariantUnselected={IconVariant.X}
                        size="lg"
                        isSelected={selected}
                        onChange={() => setSelected(prevState => !prevState)}
                    />
                </div>
            </div>
            {/* Disabled switch */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Disabled switch</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <Switch
                        name="test"
                        size="lg"
                        isDisabled
                    />
                </div>
            </div>
            {/* Labelled switch group horizontal */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Labelled switch group horizontal</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <SwitchGroup orientation="horizontal">
                        <Switch
                            name="test"
                            label="Switch"
                            labelPosition="left"
                        />
                        <Switch
                            name="test"
                            label="Switch"
                        />
                    </SwitchGroup>
                </div>
            </div>
            {/* Descriptive switch group vertical */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Descriptive switch group vertical</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <SwitchGroup>
                        <Switch
                            name="test"
                            label="Switch"
                            labelPosition="left"
                            description="This is a test"
                        />
                        <Switch
                            name="test"
                            label="Switch"
                            description="This is a test"
                        />
                    </SwitchGroup>
                </div>
            </div>
            {/* Sized switch group */}
            <div className={cn("flex flex-col gap-y-3")}>
                <div className={cn(
                        "flex flex-col items-start", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <p>Sized switch group</p>
                </div>
                <div className={cn(
                        "flex justify-center items-center gap-x-3", // Positioning
                        "w-full", // Box & sizing
                    )}
                >
                    <SwitchGroup orientation="horizontal">
                        <Switch
                            name="test"
                            label="Switch"
                            size="sm"
                            description="This is a test"
                        />
                        <Switch
                            name="test"
                            label="Switch"
                            size="md"
                            description="This is a test"
                        />
                        <Switch
                            name="test"
                            label="Switch"
                            size="lg"
                            description="This is a test"
                        />
                    </SwitchGroup>
                </div>
            </div>
        </div>
    );
};