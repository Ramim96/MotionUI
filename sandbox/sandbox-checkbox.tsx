"use client";

import { useState } from "react";
// Components
import {
Checkbox,
CheckboxGroup,
} from "@design-system/ui/checkbox";
// Utils
import { cn } from "../lib/utils/css";

export const SandboxCheckbox = () => {

    // #region Individual checkbox states

    const [defaultCheckbox, setDefaultCheckbox] = useState<boolean>(true);
    const [emptyCheckbox, setEmptyCheckbox] = useState<boolean>(false);
    const [requiredCheckbox, setRequiredCheckbox] = useState<boolean>(false);
    const [invalidCheckbox, setInvalidCheckbox] = useState<boolean>(false);
    const [invalidErrorCheckbox, setInvalidErrorCheckbox] = useState<boolean>(false);
    const [size4Checkbox, setSize4Checkbox] = useState<boolean>(false);
    const [size5Checkbox, setSize5Checkbox] = useState<boolean>(false);
    const [size6Checkbox, setSize6Checkbox] = useState<boolean>(false);
    const [noLabelCheckbox, setNoLabelCheckbox] = useState<boolean>(false);
    const [secondaryCheckbox, setSecondaryCheckbox] = useState<boolean>(false);

    // #endregion

    // #region Checkbox group child states

    const [emailCheckbox, setEmailCheckbox] = useState<boolean>(false);
    const [smsCheckbox, setSmsCheckbox] = useState<boolean>(true);
    const [pushCheckbox, setPushCheckbox] = useState<boolean>(false);

    const [privacyCheckbox, setPrivacyCheckbox] = useState<boolean>(true);
    const [marketingCheckbox, setMarketingCheckbox] = useState<boolean>(false);

    const [disabledOptionOneCheckbox, setDisabledOptionOneCheckbox] = useState<boolean>(true);
    const [disabledOptionTwoCheckbox, setDisabledOptionTwoCheckbox] = useState<boolean>(false);

    const [readOnlyOptionOneCheckbox, setReadOnlyOptionOneCheckbox] = useState<boolean>(true);
    const [readOnlyOptionTwoCheckbox, setReadOnlyOptionTwoCheckbox] = useState<boolean>(false);

    const [invalidOptionOneCheckbox, setInvalidOptionOneCheckbox] = useState<boolean>(false);
    const [invalidOptionTwoCheckbox, setInvalidOptionTwoCheckbox] = useState<boolean>(false);

    const [noLabelOptionOneCheckbox, setNoLabelOptionOneCheckbox] = useState<boolean>(false);
    const [noLabelOptionTwoCheckbox, setNoLabelOptionTwoCheckbox] = useState<boolean>(true);

    // #endregion

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            {/* ============================================================
                Checkbox
            ============================================================ */}

            <div className={cn("flex flex-col gap-y-5 w-full")}>

                <div className={cn("flex justify-center items-start")}>
                    <p>Checkbox</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled checkbox */}
                    <Checkbox
                        id="checkbox-default"
                        name="checkbox-default"
                        label="Checkbox"
                        description="A basic controlled checkbox"
                        value={defaultCheckbox}
                        onChange={(value) => setDefaultCheckbox(value)}
                    />

                    {/* Empty */}
                    <Checkbox
                        id="checkbox-empty"
                        name="checkbox-empty"
                        label="Empty checkbox"
                        description="This checkbox starts unchecked"
                        value={emptyCheckbox}
                        onChange={(value) => setEmptyCheckbox(value)}
                    />

                    {/* Disabled */}
                    <Checkbox
                        id="checkbox-disabled"
                        name="checkbox-disabled"
                        label="Disabled checkbox"
                        description="This checkbox is disabled"
                        value={true}
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <Checkbox
                        id="checkbox-readonly"
                        name="checkbox-readonly"
                        label="Read-only checkbox"
                        description="This checkbox is read-only"
                        value={true}
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <Checkbox
                        id="checkbox-required"
                        name="checkbox-required"
                        label="Required checkbox"
                        description="A checkbox is required"
                        value={requiredCheckbox}
                        isRequired
                        onChange={(value) => setRequiredCheckbox(value)}
                    />

                    {/* Invalid */}
                    <Checkbox
                        id="checkbox-invalid"
                        name="checkbox-invalid"
                        label="Invalid checkbox"
                        value={invalidCheckbox}
                        isInvalid
                        onChange={(value) => setInvalidCheckbox(value)}
                    />

                    {/* Invalid with error */}
                    <Checkbox
                        id="checkbox-invalid-error"
                        name="checkbox-invalid-error"
                        label="Invalid checkbox with error"
                        description="This checkbox has a validation error"
                        value={invalidErrorCheckbox}
                        isInvalid
                        fieldError="Please accept this option"
                        onChange={(value) => setInvalidErrorCheckbox(value)}
                    />

                    {/* Size 4 */}
                    <Checkbox
                        id="checkbox-size-4"
                        name="checkbox-size-4"
                        label="Small checkbox"
                        description="Checkbox size 4"
                        size={4}
                        value={size4Checkbox}
                        onChange={(value) => setSize4Checkbox(value)}
                    />

                    {/* Size 5 */}
                    <Checkbox
                        id="checkbox-size-5"
                        name="checkbox-size-5"
                        label="Medium checkbox"
                        description="Checkbox size 5"
                        size={5}
                        value={size5Checkbox}
                        onChange={(value) => setSize5Checkbox(value)}
                    />

                    {/* Size 6 */}
                    <Checkbox
                        id="checkbox-size-6"
                        name="checkbox-size-6"
                        label="Large checkbox"
                        description="Checkbox size 6"
                        size={6}
                        value={size6Checkbox}
                        onChange={(value) => setSize6Checkbox(value)}
                    />

                    {/* No label */}
                    <Checkbox
                        id="checkbox-no-label"
                        name="checkbox-no-label"
                        description="Checkbox without a label"
                        value={noLabelCheckbox}
                        ariaLabel="no-label"
                        onChange={(value) => setNoLabelCheckbox(value)}
                    />

                    {/* No label or description */}
                    <Checkbox
                        id="checkbox-no-label-no-description"
                        name="checkbox-no-label-no-description"
                        value={false}
                        ariaLabel="no-label-no-description"
                        onChange={() => {}}
                    />

                    {/* Secondary variant */}
                    <Checkbox
                        id="checkbox-secondary"
                        name="checkbox-secondary"
                        label="Secondary checkbox"
                        description="Checkbox using the secondary variant"
                        variant="secondary"
                        value={secondaryCheckbox}
                        onChange={(value) => setSecondaryCheckbox(value)}
                    />

                </div>
            </div>

            {/* ============================================================
                Checkbox Group
            ============================================================ */}

            <div className={cn("flex flex-col gap-y-5 w-full")}>

                <div className={cn("flex justify-center items-start")}>
                    <p>Checkbox Group</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic checkbox group */}
                    <CheckboxGroup
                        label="Preferences"
                        description="Select your preferences"
                        orientation="horizontal"
                    >
                        <Checkbox
                            id="checkbox-group-email"
                            name="checkbox-group-email"
                            label="Email notifications"
                            value={emailCheckbox}
                            onChange={(value) => setEmailCheckbox(value)}
                        />

                        <Checkbox
                            id="checkbox-group-sms"
                            name="checkbox-group-sms"
                            label="SMS notifications"
                            value={smsCheckbox}
                            onChange={(value) => setSmsCheckbox(value)}
                        />

                        <Checkbox
                            id="checkbox-group-push"
                            name="checkbox-group-push"
                            label="Push notifications"
                            value={pushCheckbox}
                            onChange={(value) => setPushCheckbox(value)}
                        />
                    </CheckboxGroup>

                    {/* Required checkbox group */}
                    <CheckboxGroup
                        label="Terms"
                        description="Please select the required options"
                        isRequired
                    >
                        <Checkbox
                            id="checkbox-group-privacy"
                            name="checkbox-group-privacy"
                            label="Privacy policy"
                            value={privacyCheckbox}
                            onChange={(value) => setPrivacyCheckbox(value)}
                        />

                        <Checkbox
                            id="checkbox-group-marketing"
                            name="checkbox-group-marketing"
                            label="Marketing communications"
                            value={marketingCheckbox}
                            onChange={(value) => setMarketingCheckbox(value)}
                        />
                    </CheckboxGroup>

                    {/* Disabled checkbox group */}
                    <CheckboxGroup
                        label="Disabled options"
                        description="These options cannot be changed"
                        isDisabled
                    >
                        <Checkbox
                            id="checkbox-group-disabled-one"
                            name="checkbox-group-disabled-one"
                            label="Option one"
                            value={disabledOptionOneCheckbox}
                            onChange={(value) => setDisabledOptionOneCheckbox(value)}
                        />

                        <Checkbox
                            id="checkbox-group-disabled-two"
                            name="checkbox-group-disabled-two"
                            label="Option two"
                            value={disabledOptionTwoCheckbox}
                            onChange={(value) => setDisabledOptionTwoCheckbox(value)}
                        />
                    </CheckboxGroup>

                    {/* Read-only checkbox group */}
                    <CheckboxGroup
                        label="Read-only options"
                        description="These options cannot be changed"
                    >
                        <Checkbox
                            id="checkbox-group-readonly-one"
                            name="checkbox-group-readonly-one"
                            label="Option one"
                            value={readOnlyOptionOneCheckbox}
                            onChange={(value) => setReadOnlyOptionOneCheckbox(value)}
                        />

                        <Checkbox
                            id="checkbox-group-readonly-two"
                            name="checkbox-group-readonly-two"
                            label="Option two"
                            value={readOnlyOptionTwoCheckbox}
                            onChange={(value) => setReadOnlyOptionTwoCheckbox(value)}
                        />
                    </CheckboxGroup>

                    {/* Invalid checkbox group */}
                    <CheckboxGroup
                        label="Required preferences"
                        description="Please select at least one option"
                        isInvalid
                        fieldError="Please select at least one option"
                    >
                        <Checkbox
                            id="checkbox-group-invalid-one"
                            name="checkbox-group-invalid-one"
                            label="Option one"
                            value={invalidOptionOneCheckbox}
                            onChange={(value) => setInvalidOptionOneCheckbox(value)}
                        />

                        <Checkbox
                            id="checkbox-group-invalid-two"
                            name="checkbox-group-invalid-two"
                            label="Option two"
                            value={invalidOptionTwoCheckbox}
                            onChange={(value) => setInvalidOptionTwoCheckbox(value)}
                        />
                    </CheckboxGroup>

                    {/* Checkbox group without label */}
                    <CheckboxGroup description="A checkbox group without a label" ariaLabel="group-without-label">
                        <Checkbox
                            id="checkbox-group-no-label-one"
                            name="checkbox-group-no-label-one"
                            label="Option one"
                            value={noLabelOptionOneCheckbox}
                            onChange={(value) => setNoLabelOptionOneCheckbox(value)}
                        />

                        <Checkbox
                            id="checkbox-group-no-label-two"
                            name="checkbox-group-no-label-two"
                            label="Option two"
                            value={noLabelOptionTwoCheckbox}
                            onChange={(value) => setNoLabelOptionTwoCheckbox(value)}
                        />
                    </CheckboxGroup>

                </div>
            </div>
        </div>
    );
};