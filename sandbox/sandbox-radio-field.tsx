"use client";

import { useState } from "react";
// Components
import {
    RadioField,
    RadioGroup,
} from "@design-system/ui/radio-field";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxRadioGroup = () => {

    const [basicRadio, setBasicRadio] = useState<string | undefined>("option-1");
    const [emptyRadio, setEmptyRadio] = useState<string | undefined>("");
    const [requiredRadio, setRequiredRadio] = useState<string | undefined>("option-1");
    const [invalidRadio, setInvalidRadio] = useState<string | undefined>("option-1");
    const [disabledRadio, setDisabledRadio] = useState<string | undefined>("option-1");
    const [readOnlyRadio, setReadOnlyRadio] = useState<string | undefined>("option-1");
    const [horizontalRadio, setHorizontalRadio] = useState<string | undefined>("option-1");
    const [tooltipRadio, setTooltipRadio] = useState<string | undefined>("option-1");
    const [noLabelRadio, setNoLabelRadio] = useState<string | undefined>("option-1");
    const [customClassRadio, setCustomClassRadio] = useState<string | undefined>("option-1");

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Radio Group</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled radio group */}
                    <RadioGroup
                        id="radio-default"
                        name="radio-default"
                        label="Options"
                        description="Select an option"
                        value={basicRadio}
                        onChange={(value?: string) => setBasicRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Empty */}
                    <RadioGroup
                        id="radio-empty"
                        name="radio-empty"
                        label="Empty selection"
                        description="No option selected"
                        value={emptyRadio}
                        onChange={(value?: string) => setEmptyRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Disabled */}
                    <RadioGroup
                        id="radio-disabled"
                        name="radio-disabled"
                        label="Disabled options"
                        description="This radio group is disabled"
                        value={disabledRadio}
                        isDisabled
                        onChange={(value?: string) => setDisabledRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                            isDisabled
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                            isDisabled
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                            isDisabled
                        />
                    </RadioGroup>

                    {/* Read only */}
                    <RadioGroup
                        id="radio-readonly"
                        name="radio-readonly"
                        label="Read-only options"
                        description="This radio group is read-only"
                        value={readOnlyRadio}
                        isReadOnly
                        onChange={(value?: string) => setReadOnlyRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Required */}
                    <RadioGroup
                        id="radio-required"
                        name="radio-required"
                        label="Required options"
                        description="An option is required"
                        value={requiredRadio}
                        isRequired
                        onChange={(value?: string) => setRequiredRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Invalid */}
                    <RadioGroup
                        id="radio-invalid"
                        name="radio-invalid"
                        label="Invalid options"
                        description="This group is invalid"
                        value={invalidRadio}
                        isInvalid
                        onChange={(value?: string) => setInvalidRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Invalid with error */}
                    <RadioGroup
                        id="radio-invalid-error"
                        name="radio-invalid-error"
                        label="Invalid options"
                        description="This group has a validation error"
                        value={invalidRadio}
                        isInvalid
                        fieldError="Please select a valid option"
                        onChange={(value?: string) => setInvalidRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Required + invalid */}
                    <RadioGroup
                        id="radio-required-invalid"
                        name="radio-required-invalid"
                        label="Required invalid options"
                        description="A valid option must be selected"
                        value={emptyRadio}
                        isRequired
                        isInvalid
                        fieldError="Please select an option"
                        onChange={(value?: string) => setEmptyRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Required + disabled */}
                    <RadioGroup
                        id="radio-required-disabled"
                        name="radio-required-disabled"
                        label="Required disabled options"
                        description="This required group is disabled"
                        value={requiredRadio}
                        isRequired
                        isDisabled
                        onChange={(value?: string) => setRequiredRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                            isDisabled
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                            isDisabled
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                            isDisabled
                        />
                    </RadioGroup>

                    {/* Horizontal */}
                    <RadioGroup
                        id="radio-horizontal"
                        name="radio-horizontal"
                        label="Horizontal options"
                        description="Options displayed horizontally"
                        value={horizontalRadio}
                        orientation="horizontal"
                        onChange={(value?: string) => setHorizontalRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Tooltip */}
                    <RadioGroup
                        id="radio-tooltip"
                        name="radio-tooltip"
                        label="Notification preference"
                        description="Choose how you want to be notified"
                        tooltip="You can change your notification preference later"
                        value={tooltipRadio}
                        onChange={(value?: string) => setTooltipRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Email"
                        />
                        <RadioField
                            value="option-2"
                            label="SMS"
                        />
                        <RadioField
                            value="option-3"
                            label="Push"
                        />
                    </RadioGroup>

                    {/* Radio field descriptions */}
                    <RadioGroup
                        id="radio-field-description"
                        name="radio-field-description"
                        label="Notification preference"
                        description="Choose how you want to be notified"
                        value={basicRadio}
                        onChange={(value?: string) => setBasicRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Email"
                            description="Receive notifications by email"
                        />
                        <RadioField
                            value="option-2"
                            label="SMS"
                            description="Receive notifications by text message"
                        />
                        <RadioField
                            value="option-3"
                            label="Push"
                            description="Receive notifications through the app"
                        />
                    </RadioGroup>

                    {/* Radio field children */}
                    <RadioGroup
                        id="radio-field-children"
                        name="radio-field-children"
                        label="Custom content"
                        description="Radio fields with custom children"
                        value={basicRadio}
                        onChange={(value?: string) => setBasicRadio(value)}
                    >
                        <RadioField value="option-1" label="Option 1">
                            <span>Additional content</span>
                        </RadioField>

                        <RadioField value="option-2" label="Option 2">
                            <span>Additional content</span>
                        </RadioField>

                        <RadioField value="option-3" label="Option 3">
                            <span>Additional content</span>
                        </RadioField>
                    </RadioGroup>

                    {/* No label */}
                    <RadioGroup
                        id="radio-no-label"
                        name="radio-no-label"
                        ariaLabel="Radio options"
                        description="Radio group without a visible label"
                        value={noLabelRadio}
                        onChange={(value?: string) => setNoLabelRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* No label or description */}
                    <RadioGroup
                        id="radio-no-label-no-description"
                        name="radio-no-label-no-description"
                        ariaLabel="Radio options without visible label"
                        value={noLabelRadio}
                        onChange={(value?: string) => setNoLabelRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Radio field without label */}
                    <RadioGroup
                        id="radio-field-no-label"
                        name="radio-field-no-label"
                        label="Unnamed choices"
                        description="Individual radio fields without visible labels"
                        value={basicRadio}
                        onChange={(value?: string) => setBasicRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            ariaLabel="First option"
                        />
                        <RadioField
                            value="option-2"
                            ariaLabel="Second option"
                        />
                        <RadioField
                            value="option-3"
                            ariaLabel="Third option"
                        />
                    </RadioGroup>

                    {/* Individual disabled radio fields */}
                    <RadioGroup
                        id="radio-individual-disabled"
                        name="radio-individual-disabled"
                        label="Individual disabled options"
                        description="Only the second option is disabled"
                        value={basicRadio}
                        onChange={(value?: string) => setBasicRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                            isDisabled
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Secondary variant */}
                    <RadioGroup
                        id="radio-secondary"
                        name="radio-secondary"
                        label="Secondary options"
                        description="Radio group using the secondary variant"
                        value={basicRadio}
                        variant="secondary"
                        onChange={(value?: string) => setBasicRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                    {/* Custom class */}
                    <RadioGroup
                        id="radio-custom-class"
                        name="radio-custom-class"
                        label="Custom styled options"
                        description="This group has a custom className"
                        value={customClassRadio}
                        className="max-w-sm"
                        onChange={(value?: string) => setCustomClassRadio(value)}
                    >
                        <RadioField
                            value="option-1"
                            label="Option 1"
                        />
                        <RadioField
                            value="option-2"
                            label="Option 2"
                        />
                        <RadioField
                            value="option-3"
                            label="Option 3"
                        />
                    </RadioGroup>

                </div>
            </div>
        </div>
    );
};