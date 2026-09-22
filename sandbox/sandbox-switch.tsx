"use client";

import { useState } from "react";
// Components
import { IconVariant } from "@design-system/icons/icon-variants";
import { Switch, SwitchGroup } from "@design-system/ui/switch";

export const SandboxSwitch = () => {

    const [basicSwitch, setBasicSwitch] = useState(false);
    const [leftLabelSwitch, setLeftLabelSwitch] = useState(true);
    const [disabledSwitch, setDisabledSwitch] = useState(false);
    const [readOnlySwitch, setReadOnlySwitch] = useState(true);
    const [requiredSwitch, setRequiredSwitch] = useState(false);
    const [invalidSwitch, setInvalidSwitch] = useState(false);

    const [groupSwitches, setGroupSwitches] = useState({
        first: false,
        second: true,
        third: false,
    });

    return (
        <div className="flex flex-col gap-8 p-6">

            {/* Basic */}

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                    Basic
                </h2>

                <Switch
                    id="basic-switch"
                    name="basic-switch"
                    label="Basic switch"
                    isSelected={basicSwitch}
                    onChange={setBasicSwitch}
                />

                <Switch
                    id="basic-switch-uncontrolled-state"
                    name="basic-switch-uncontrolled-state"
                    ariaLabel="Switch without a visible label"
                    isSelected={basicSwitch}
                    onChange={setBasicSwitch}
                />
            </section>

            {/* Label position */}

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                    Label position
                </h2>

                <Switch
                    id="label-right"
                    name="label-right"
                    label="Label on the right"
                    description="The default label position."
                    labelPosition="right"
                    isSelected={basicSwitch}
                    onChange={setBasicSwitch}
                />

                <Switch
                    id="label-left"
                    name="label-left"
                    label="Label on the left"
                    description="The label is positioned before the switch."
                    labelPosition="left"
                    isSelected={leftLabelSwitch}
                    onChange={setLeftLabelSwitch}
                />
            </section>

            {/* Descriptions and validation */}

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                    Description & validation
                </h2>

                <Switch
                    id="description-switch"
                    name="description-switch"
                    label="Notifications"
                    description="Receive notifications about account activity."
                    isSelected={basicSwitch}
                    onChange={setBasicSwitch}
                />

                <Switch
                    id="invalid-switch"
                    name="invalid-switch"
                    label="Accept terms"
                    description="You must enable this option to continue."
                    isSelected={invalidSwitch}
                    isInvalid
                    fieldError="This option is required."
                    onChange={setInvalidSwitch}
                />
            </section>

            {/* Status */}

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                    Status
                </h2>

                <Switch
                    id="disabled-switch"
                    name="disabled-switch"
                    label="Disabled"
                    description="This switch cannot be changed."
                    isSelected={disabledSwitch}
                    isDisabled
                    onChange={setDisabledSwitch}
                />

                <Switch
                    id="readonly-switch"
                    name="readonly-switch"
                    label="Read only"
                    description="This switch is displayed but cannot be changed."
                    isSelected={readOnlySwitch}
                    isReadOnly
                    onChange={setReadOnlySwitch}
                />

                <Switch
                    id="required-switch"
                    name="required-switch"
                    label="Required"
                    description="This switch is marked as required."
                    isSelected={requiredSwitch}
                    isRequired
                    onChange={setRequiredSwitch}
                />
            </section>

            {/* Sizes */}

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                    Sizes
                </h2>

                <Switch
                    id="size-small"
                    name="size-small"
                    label="Small"
                    size="sm"
                    isSelected
                    onChange={() => {}}
                />

                <Switch
                    id="size-medium"
                    name="size-medium"
                    label="Medium"
                    size="md"
                    isSelected
                    onChange={() => {}}
                />

                <Switch
                    id="size-large"
                    name="size-large"
                    label="Large"
                    size="lg"
                    isSelected
                    onChange={() => {}}
                />
            </section>

            {/* Icons */}

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                    Icons
                </h2>

                <Switch
                    id="generic-icon"
                    name="generic-icon"
                    label="Generic icon"
                    description="Uses the same icon for both states."
                    isSelected={basicSwitch}
                    iconVariantGeneric={IconVariant.Check}
                    onChange={setBasicSwitch}
                />

                <Switch
                    id="selected-icon"
                    name="selected-icon"
                    label="Selected icon"
                    description="Displays an icon when selected."
                    isSelected={basicSwitch}
                    iconVariantSelected={IconVariant.Check}
                    onChange={setBasicSwitch}
                />

                <Switch
                    id="unselected-icon"
                    name="unselected-icon"
                    label="Unselected icon"
                    description="Displays an icon when unselected."
                    isSelected={basicSwitch}
                    iconVariantUnselected={IconVariant.X}
                    onChange={setBasicSwitch}
                />

                <Switch
                    id="state-icons"
                    name="state-icons"
                    label="State-specific icons"
                    description="Different icons are displayed for each state."
                    isSelected={basicSwitch}
                    iconVariantSelected={IconVariant.Check}
                    iconVariantUnselected={IconVariant.X}
                    onChange={setBasicSwitch}
                />
            </section>

            {/* Switch group */}

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                    Switch group
                </h2>

                <SwitchGroup>
                    <Switch
                        id="group-first"
                        name="group-first"
                        label="First option"
                        isSelected={groupSwitches.first}
                        onChange={(isSelected) =>
                            setGroupSwitches((current) => ({
                                ...current,
                                first: isSelected,
                            }))
                        }
                    />

                    <Switch
                        id="group-second"
                        name="group-second"
                        label="Second option"
                        isSelected={groupSwitches.second}
                        onChange={(isSelected) =>
                            setGroupSwitches((current) => ({
                                ...current,
                                second: isSelected,
                            }))
                        }
                    />

                    <Switch
                        id="group-third"
                        name="group-third"
                        label="Third option"
                        isSelected={groupSwitches.third}
                        onChange={(isSelected) =>
                            setGroupSwitches((current) => ({
                                ...current,
                                third: isSelected,
                            }))
                        }
                    />
                </SwitchGroup>
            </section>

            {/* Horizontal group */}

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                    Horizontal switch group
                </h2>

                <SwitchGroup orientation="horizontal">
                    <Switch
                        id="horizontal-first"
                        name="horizontal-first"
                        label="First"
                        isSelected
                        onChange={() => {}}
                    />

                    <Switch
                        id="horizontal-second"
                        name="horizontal-second"
                        label="Second"
                        isSelected
                        onChange={() => {}}
                    />

                    <Switch
                        id="horizontal-third"
                        name="horizontal-third"
                        label="Third"
                        isSelected={false}
                        onChange={() => {}}
                    />
                </SwitchGroup>
            </section>

        </div>
    );
};