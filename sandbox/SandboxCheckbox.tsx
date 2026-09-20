"use client";

import { useState } from "react";
// Components
import { Checkbox, CheckboxGroup } from "@design-system/input-fields/Checkbox";
// Utils
import { cn } from "@utils/css";

export const SandboxCheckbox = () => {

    const [selectedCheckbox, setSelectedCheckbox] = useState(false);

    const [selectedGroup, setSelectedGroup] = useState<string[]>([
        "checkbox1",
    ]);

    const [selectedDisabledGroup, setSelectedDisabledGroup] = useState<string[]>([]);

    const [selectedInvalidGroup, setSelectedInvalidGroup] = useState<string[]>([]);

    const [selectedErrorGroup, setSelectedErrorGroup] = useState<string[]>([]);

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Checkbox</p>
                </div>
                {/* Standalone checkboxes */}
                <div className="flex flex-wrap gap-x-5 gap-y-8">
                    <Checkbox
                        id="checkbox-default"
                        label="Checkbox"
                        description="Test description"
                        isSelected={selectedCheckbox}
                        onChange={(isSelected: boolean) => setSelectedCheckbox(isSelected)}
                    />

                    <Checkbox
                        id="checkbox-disabled"
                        label="Disabled checkbox"
                        description="This checkbox is disabled"
                        isSelected={false}
                        isDisabled
                        onChange={() => {}}
                    />

                    <Checkbox
                        id="checkbox-invalid"
                        label="Invalid checkbox"
                        isSelected={false}
                        isInvalid
                        onChange={() => {}}
                    />

                    <Checkbox
                        id="checkbox-invalid-error"
                        label="Invalid checkbox with error"
                        description="This has an error message"
                        isSelected={false}
                        isInvalid
                        fieldError="This checkbox is invalid"
                        onChange={() => {}}
                    />

                    <Checkbox
                        id="checkbox-no-label"
                        description="Checkbox without a label"
                        isSelected={false}
                        onChange={() => {}}
                    />

                    <Checkbox
                        id="checkbox-no-label-no-description"
                        isSelected={false}
                        onChange={() => {}}
                    />

                    <Checkbox
                        id="checkbox-required"
                        label="Required checkbox"
                        description="This checkbox is required"
                        isSelected={false}
                        isRequired
                        onChange={() => {}}
                        />
                </div>

                {/* Checkbox groups */}
                <div className="flex flex-wrap gap-x-10 gap-y-10">
                    <CheckboxGroup
                        name="checkbox-group"
                        label="Checkbox group"
                        description="This is a test"
                        value={selectedGroup}
                        onChange={(value: string[]) => setSelectedGroup(value)}
                    >
                        <Checkbox
                            id="checkbox1"
                            label="Multi checkbox 1"
                            description="Test description 1"
                            value="checkbox1"
                            isSelected={selectedGroup.includes("checkbox1")}
                            onChange={() => {}}
                        />
                        <Checkbox
                            id="checkbox2"
                            label="Multi checkbox 2"
                            description="Test description 2"
                            value="checkbox2"
                            isSelected={selectedGroup.includes("checkbox2")}
                            onChange={() => {}}
                        />
                        <Checkbox
                            id="checkbox3"
                            label="Multi checkbox 3"
                            description="Test description 3"
                            value="checkbox3"
                            isSelected={selectedGroup.includes("checkbox3")}
                            onChange={() => {}}
                        />
                    </CheckboxGroup>

                    <CheckboxGroup
                        name="disabled-checkbox-group"
                        label="Disabled checkbox group"
                        description="All options are disabled"
                        value={selectedDisabledGroup}
                        isDisabled
                        onChange={(value: string[]) => setSelectedDisabledGroup(value)}
                    >
                        <Checkbox
                            id="disabled-checkbox1"
                            label="Disabled option 1"
                            value="disabled-checkbox1"
                            isSelected={selectedDisabledGroup.includes("disabled-checkbox1")}
                            onChange={() => {}}
                        />
                        <Checkbox
                            id="disabled-checkbox2"
                            label="Disabled option 2"
                            value="disabled-checkbox2"
                            isSelected={selectedDisabledGroup.includes("disabled-checkbox2")}
                            onChange={() => {}}
                        />
                    </CheckboxGroup>

                    <CheckboxGroup
                        name="invalid-checkbox-group"
                        label="Invalid checkbox group"
                        description="This group is invalid"
                        value={selectedInvalidGroup}
                        isInvalid
                        onChange={(value: string[]) => setSelectedInvalidGroup(value)}
                    >
                        <Checkbox
                            id="invalid-checkbox1"
                            label="Invalid option 1"
                            value="invalid-checkbox1"
                            isSelected={selectedInvalidGroup.includes("invalid-checkbox1")}
                            onChange={() => {}}
                        />
                        <Checkbox
                            id="invalid-checkbox2"
                            label="Invalid option 2"
                            value="invalid-checkbox2"
                            isSelected={selectedInvalidGroup.includes("invalid-checkbox2")}
                            onChange={() => {}}
                        />
                    </CheckboxGroup>

                    <CheckboxGroup
                        name="error-checkbox-group"
                        label="Checkbox group with error"
                        description="This group contains a validation error"
                        value={selectedErrorGroup}
                        isInvalid
                        fieldError="Please select at least one option"
                        onChange={(value: string[]) => setSelectedErrorGroup(value)}
                    >
                        <Checkbox
                            id="error-checkbox1"
                            label="Option 1"
                            value="error-checkbox1"
                            isSelected={selectedErrorGroup.includes("error-checkbox1")}
                            onChange={() => {}}
                        />
                        <Checkbox
                            id="error-checkbox2"
                            label="Option 2"
                            value="error-checkbox2"
                            isSelected={selectedErrorGroup.includes("error-checkbox2")}
                            onChange={() => {}}
                        />
                        <Checkbox
                            id="error-checkbox3"
                            label="Option 3"
                            value="error-checkbox3"
                            isSelected={selectedErrorGroup.includes("error-checkbox3")}
                            onChange={() => {}}
                        />
                    </CheckboxGroup>

                    <CheckboxGroup
                        name="required-checkbox-group"
                        label="Required checkbox group"
                        description="Select one or more options"
                        value={selectedErrorGroup}
                        isRequired
                        onChange={(value: string[]) => setSelectedErrorGroup(value)}
                    >
                        <Checkbox
                            id="required-checkbox1"
                            label="Required option 1"
                            value="required-checkbox1"
                            isSelected={selectedErrorGroup.includes("required-checkbox1")}
                            onChange={() => {}}
                        />
                        <Checkbox
                            id="required-checkbox2"
                            label="Required option 2"
                            value="required-checkbox2"
                            isSelected={selectedErrorGroup.includes("required-checkbox2")}
                            onChange={() => {}}
                        />
                    </CheckboxGroup>
                </div>
            </div>
        </div>
    );
};