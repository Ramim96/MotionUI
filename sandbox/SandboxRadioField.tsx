"use client";

import { useState } from "react";
// Components
import {
    RadioField,
    RadioGroup,
} from "@design-system/input-fields/RadioField";
// Utils
import { cn } from "@utils/css";

export const SandboxRadioGroup = () => {

    const [basicRadio, setBasicRadio] = useState<string>("option-1");
    const [emptyRadio, setEmptyRadio] = useState<string>("");
    const [requiredRadio, setRequiredRadio] = useState<string>("option-1");
    const [invalidRadio, setInvalidRadio] = useState<string>("option-1");
    const [disabledRadio, setDisabledRadio] = useState<string>("option-1");
    const [readOnlyRadio, setReadOnlyRadio] = useState<string>("option-1");
    const [horizontalRadio, setHorizontalRadio] = useState<string>("option-1");

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
                        onChange={(value: string) => setBasicRadio(value)}
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
                        onChange={(value: string) => setEmptyRadio(value)}
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
                        onChange={(value: string) => setDisabledRadio(value)}
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

                    {/* Read only */}
                    <RadioGroup
                        id="radio-readonly"
                        name="radio-readonly"
                        label="Read-only options"
                        description="This radio group is read-only"
                        value={readOnlyRadio}
                        isReadOnly
                        onChange={(value: string) => setReadOnlyRadio(value)}
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
                        onChange={(value: string) => setRequiredRadio(value)}
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
                        value={invalidRadio}
                        isInvalid
                        onChange={(value: string) => setInvalidRadio(value)}
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
                        onChange={(value: string) => setInvalidRadio(value)}
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

                    {/* Horizontal */}
                    <RadioGroup
                        id="radio-horizontal"
                        name="radio-horizontal"
                        label="Horizontal options"
                        description="Options displayed horizontally"
                        value={horizontalRadio}
                        orientation="horizontal"
                        onChange={(value: string) => setHorizontalRadio(value)}
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

                    {/* Radio field descriptions */}
                    <RadioGroup
                        id="radio-field-description"
                        name="radio-field-description"
                        label="Notification preference"
                        description="Choose how you want to be notified"
                        value={basicRadio}
                        onChange={(value: string) => setBasicRadio(value)}
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
                        onChange={(value: string) => setBasicRadio(value)}
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

                    {/* Full width */}
                    <RadioGroup
                        id="radio-full-width"
                        name="radio-full-width"
                        label="Full width options"
                        description="This group uses the full available width"
                        value={basicRadio}
                        fullWidth
                        onChange={(value: string) => setBasicRadio(value)}
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