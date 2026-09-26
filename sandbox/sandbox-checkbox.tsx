"use client";

import { useState } from "react";
// Components
import {
    Checkbox,
    CheckboxGroup,
} from "@design-system/ui/checkbox";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxCheckbox = () => {

    // #region Individual checkbox states

    const [defaultCheckbox, setDefaultCheckbox] = useState<boolean>(true);
    const [emptyCheckbox, setEmptyCheckbox] = useState<boolean>(false);

    const [disabledCheckbox, setDisabledCheckbox] = useState<boolean>(true);
    const [readOnlyCheckbox, setReadOnlyCheckbox] = useState<boolean>(true);
    const [requiredCheckbox, setRequiredCheckbox] = useState<boolean>(false);

    const [invalidCheckbox, setInvalidCheckbox] = useState<boolean>(false);
    const [invalidErrorCheckbox, setInvalidErrorCheckbox] =
        useState<boolean>(false);

    const [size4Checkbox, setSize4Checkbox] = useState<boolean>(false);
    const [size5Checkbox, setSize5Checkbox] = useState<boolean>(false);
    const [size6Checkbox, setSize6Checkbox] = useState<boolean>(false);

    const [noLabelCheckbox, setNoLabelCheckbox] = useState<boolean>(false);
    const [noLabelNoDescriptionCheckbox, setNoLabelNoDescriptionCheckbox] =
        useState<boolean>(false);

    const [secondaryCheckbox, setSecondaryCheckbox] =
        useState<boolean>(false);

    const [tooltipCheckbox, setTooltipCheckbox] =
        useState<boolean>(false);

    const [customClassCheckbox, setCustomClassCheckbox] =
        useState<boolean>(false);

    // #endregion


    // #region Checkbox group child states

    // Basic group
    const [emailCheckbox, setEmailCheckbox] = useState<boolean>(false);
    const [smsCheckbox, setSmsCheckbox] = useState<boolean>(true);
    const [pushCheckbox, setPushCheckbox] = useState<boolean>(false);

    // Required group
    const [privacyCheckbox, setPrivacyCheckbox] = useState<boolean>(true);
    const [marketingCheckbox, setMarketingCheckbox] =
        useState<boolean>(false);

    // Disabled group
    const [disabledOptionOneCheckbox, setDisabledOptionOneCheckbox] =
        useState<boolean>(true);
    const [disabledOptionTwoCheckbox, setDisabledOptionTwoCheckbox] =
        useState<boolean>(false);

    // Read-only group
    const [readOnlyOptionOneCheckbox, setReadOnlyOptionOneCheckbox] =
        useState<boolean>(true);
    const [readOnlyOptionTwoCheckbox, setReadOnlyOptionTwoCheckbox] =
        useState<boolean>(false);

    // Invalid group
    const [invalidOptionOneCheckbox, setInvalidOptionOneCheckbox] =
        useState<boolean>(false);
    const [invalidOptionTwoCheckbox, setInvalidOptionTwoCheckbox] =
        useState<boolean>(false);

    // Invalid + required group
    const [
        invalidRequiredOptionOneCheckbox,
        setInvalidRequiredOptionOneCheckbox,
    ] = useState<boolean>(false);

    const [
        invalidRequiredOptionTwoCheckbox,
        setInvalidRequiredOptionTwoCheckbox,
    ] = useState<boolean>(false);

    // Vertical group
    const [verticalOptionOneCheckbox, setVerticalOptionOneCheckbox] =
        useState<boolean>(false);
    const [verticalOptionTwoCheckbox, setVerticalOptionTwoCheckbox] =
        useState<boolean>(true);

    // No-label group
    const [noLabelOptionOneCheckbox, setNoLabelOptionOneCheckbox] =
        useState<boolean>(false);
    const [noLabelOptionTwoCheckbox, setNoLabelOptionTwoCheckbox] =
        useState<boolean>(true);

    // #endregion


    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center",
                "gap-x-3 gap-y-8 p-2 w-full",
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

                    {/* --------------------------------------------------------
                        Basic
                    -------------------------------------------------------- */}

                    <Checkbox
                        id="checkbox-default"
                        name="checkbox-default"
                        label="Checkbox"
                        description="A basic controlled checkbox"
                        value={defaultCheckbox}
                        onChange={setDefaultCheckbox}
                    />

                    {/* Starts unchecked */}
                    <Checkbox
                        id="checkbox-empty"
                        name="checkbox-empty"
                        label="Empty checkbox"
                        description="This checkbox starts unchecked"
                        value={emptyCheckbox}
                        onChange={setEmptyCheckbox}
                    />

                    {/* --------------------------------------------------------
                        Status
                    -------------------------------------------------------- */}

                    <Checkbox
                        id="checkbox-disabled"
                        name="checkbox-disabled"
                        label="Disabled checkbox"
                        description="This checkbox is disabled"
                        value={disabledCheckbox}
                        isDisabled
                        onChange={setDisabledCheckbox}
                    />

                    <Checkbox
                        id="checkbox-readonly"
                        name="checkbox-readonly"
                        label="Read-only checkbox"
                        description="This checkbox is read-only"
                        value={readOnlyCheckbox}
                        isReadOnly
                        onChange={setReadOnlyCheckbox}
                    />

                    <Checkbox
                        id="checkbox-required"
                        name="checkbox-required"
                        label="Required checkbox"
                        description="This checkbox is required"
                        value={requiredCheckbox}
                        isRequired
                        onChange={setRequiredCheckbox}
                    />

                    {/* --------------------------------------------------------
                        Validation
                    -------------------------------------------------------- */}

                    <Checkbox
                        id="checkbox-invalid"
                        name="checkbox-invalid"
                        label="Invalid checkbox"
                        value={invalidCheckbox}
                        isInvalid
                        onChange={setInvalidCheckbox}
                    />

                    <Checkbox
                        id="checkbox-invalid-error"
                        name="checkbox-invalid-error"
                        label="Invalid checkbox with error"
                        description="This checkbox has a validation error"
                        value={invalidErrorCheckbox}
                        isInvalid
                        fieldError="Please accept this option"
                        onChange={setInvalidErrorCheckbox}
                    />

                    <Checkbox
                        id="checkbox-invalid-required"
                        name="checkbox-invalid-required"
                        label="Invalid required checkbox"
                        description="Required checkbox with validation error"
                        value={false}
                        isRequired
                        isInvalid
                        fieldError="This field is required"
                        onChange={() => {}}
                    />

                    {/* --------------------------------------------------------
                        Sizes
                    -------------------------------------------------------- */}

                    <Checkbox
                        id="checkbox-size-4"
                        name="checkbox-size-4"
                        label="Small checkbox"
                        description="Checkbox size 4"
                        size={4}
                        value={size4Checkbox}
                        onChange={setSize4Checkbox}
                    />

                    <Checkbox
                        id="checkbox-size-5"
                        name="checkbox-size-5"
                        label="Medium checkbox"
                        description="Checkbox size 5"
                        size={5}
                        value={size5Checkbox}
                        onChange={setSize5Checkbox}
                    />

                    <Checkbox
                        id="checkbox-size-6"
                        name="checkbox-size-6"
                        label="Large checkbox"
                        description="Checkbox size 6"
                        size={6}
                        value={size6Checkbox}
                        onChange={setSize6Checkbox}
                    />

                    {/* --------------------------------------------------------
                        Accessibility
                    -------------------------------------------------------- */}

                    {/* No visible label */}
                    <Checkbox
                        id="checkbox-no-label"
                        name="checkbox-no-label"
                        description="Checkbox without a visible label"
                        value={noLabelCheckbox}
                        ariaLabel="Enable notifications"
                        onChange={setNoLabelCheckbox}
                    />

                    {/* No visible label or description */}
                    <Checkbox
                        id="checkbox-no-label-no-description"
                        name="checkbox-no-label-no-description"
                        value={noLabelNoDescriptionCheckbox}
                        ariaLabel="Accept terms and conditions"
                        onChange={setNoLabelNoDescriptionCheckbox}
                    />

                    {/* --------------------------------------------------------
                        Variants
                    -------------------------------------------------------- */}

                    <Checkbox
                        id="checkbox-primary"
                        name="checkbox-primary"
                        label="Primary checkbox"
                        description="Default primary variant"
                        variant="primary"
                        value={false}
                        onChange={() => {}}
                    />

                    <Checkbox
                        id="checkbox-secondary"
                        name="checkbox-secondary"
                        label="Secondary checkbox"
                        description="Checkbox using the secondary variant"
                        variant="secondary"
                        value={secondaryCheckbox}
                        onChange={setSecondaryCheckbox}
                    />

                    {/* --------------------------------------------------------
                        Tooltip
                    -------------------------------------------------------- */}

                    <Checkbox
                        id="checkbox-tooltip"
                        name="checkbox-tooltip"
                        label="Checkbox with tooltip"
                        description="Checkbox with additional information"
                        tooltip="Additional information about this checkbox"
                        value={tooltipCheckbox}
                        onChange={setTooltipCheckbox}
                    />

                    {/* --------------------------------------------------------
                        Custom className
                    -------------------------------------------------------- */}

                    <Checkbox
                        id="checkbox-custom-class"
                        name="checkbox-custom-class"
                        label="Custom class checkbox"
                        description="Exercises the className prop"
                        className="data-testid-custom-checkbox"
                        value={customClassCheckbox}
                        onChange={setCustomClassCheckbox}
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

                    {/* --------------------------------------------------------
                        Basic horizontal group
                    -------------------------------------------------------- */}

                    <CheckboxGroup
                        label="Preferences"
                        description="Select your notification preferences"
                        orientation="horizontal"
                    >
                        <Checkbox
                            id="checkbox-group-email"
                            name="checkbox-group-email"
                            label="Email notifications"
                            value={emailCheckbox}
                            onChange={setEmailCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-sms"
                            name="checkbox-group-sms"
                            label="SMS notifications"
                            value={smsCheckbox}
                            onChange={setSmsCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-push"
                            name="checkbox-group-push"
                            label="Push notifications"
                            value={pushCheckbox}
                            onChange={setPushCheckbox}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Vertical group
                    -------------------------------------------------------- */}

                    <CheckboxGroup
                        label="Display preferences"
                        description="Select how you want the application to behave"
                        orientation="vertical"
                    >
                        <Checkbox
                            id="checkbox-group-vertical-one"
                            name="checkbox-group-vertical-one"
                            label="Show notifications"
                            value={verticalOptionOneCheckbox}
                            onChange={setVerticalOptionOneCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-vertical-two"
                            name="checkbox-group-vertical-two"
                            label="Show previews"
                            value={verticalOptionTwoCheckbox}
                            onChange={setVerticalOptionTwoCheckbox}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Default orientation
                    -------------------------------------------------------- */}

                    <CheckboxGroup
                        label="Default orientation"
                        description="No orientation prop supplied"
                    >
                        <Checkbox
                            id="checkbox-group-default-one"
                            name="checkbox-group-default-one"
                            label="Option one"
                            value={false}
                            onChange={() => {}}
                        />

                        <Checkbox
                            id="checkbox-group-default-two"
                            name="checkbox-group-default-two"
                            label="Option two"
                            value={true}
                            onChange={() => {}}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Required group
                    -------------------------------------------------------- */}

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
                            isRequired
                            onChange={setPrivacyCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-marketing"
                            name="checkbox-group-marketing"
                            label="Marketing communications"
                            value={marketingCheckbox}
                            isRequired
                            onChange={setMarketingCheckbox}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Disabled group
                    -------------------------------------------------------- */}

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
                            isDisabled
                            onChange={setDisabledOptionOneCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-disabled-two"
                            name="checkbox-group-disabled-two"
                            label="Option two"
                            value={disabledOptionTwoCheckbox}
                            isDisabled
                            onChange={setDisabledOptionTwoCheckbox}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Read-only group
                    -------------------------------------------------------- */}

                    <CheckboxGroup
                        label="Read-only options"
                        description="These options cannot be changed"
                    >
                        <Checkbox
                            id="checkbox-group-readonly-one"
                            name="checkbox-group-readonly-one"
                            label="Option one"
                            value={readOnlyOptionOneCheckbox}
                            isReadOnly
                            onChange={setReadOnlyOptionOneCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-readonly-two"
                            name="checkbox-group-readonly-two"
                            label="Option two"
                            value={readOnlyOptionTwoCheckbox}
                            isReadOnly
                            onChange={setReadOnlyOptionTwoCheckbox}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Invalid group
                    -------------------------------------------------------- */}

                    <CheckboxGroup
                        label="Invalid preferences"
                        description="Please select at least one option"
                        isInvalid
                        fieldError="Please select at least one option"
                    >
                        <Checkbox
                            id="checkbox-group-invalid-one"
                            name="checkbox-group-invalid-one"
                            label="Option one"
                            value={invalidOptionOneCheckbox}
                            isInvalid
                            onChange={setInvalidOptionOneCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-invalid-two"
                            name="checkbox-group-invalid-two"
                            label="Option two"
                            value={invalidOptionTwoCheckbox}
                            isInvalid
                            onChange={setInvalidOptionTwoCheckbox}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Invalid + required group
                    -------------------------------------------------------- */}

                    <CheckboxGroup
                        label="Required invalid preferences"
                        description="Please select at least one option"
                        isRequired
                        isInvalid
                        fieldError="Please select at least one option"
                    >
                        <Checkbox
                            id="checkbox-group-invalid-required-one"
                            name="checkbox-group-invalid-required-one"
                            label="Option one"
                            value={invalidRequiredOptionOneCheckbox}
                            isRequired
                            isInvalid
                            onChange={setInvalidRequiredOptionOneCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-invalid-required-two"
                            name="checkbox-group-invalid-required-two"
                            label="Option two"
                            value={invalidRequiredOptionTwoCheckbox}
                            isRequired
                            isInvalid
                            onChange={setInvalidRequiredOptionTwoCheckbox}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Group without visible label
                    -------------------------------------------------------- */}

                    <CheckboxGroup
                        description="A checkbox group without a visible label"
                        ariaLabel="Notification types"
                    >
                        <Checkbox
                            id="checkbox-group-no-label-one"
                            name="checkbox-group-no-label-one"
                            label="Email"
                            value={noLabelOptionOneCheckbox}
                            onChange={setNoLabelOptionOneCheckbox}
                        />

                        <Checkbox
                            id="checkbox-group-no-label-two"
                            name="checkbox-group-no-label-two"
                            label="SMS"
                            value={noLabelOptionTwoCheckbox}
                            onChange={setNoLabelOptionTwoCheckbox}
                        />
                    </CheckboxGroup>


                    {/* --------------------------------------------------------
                        Disabled + invalid group
                    -------------------------------------------------------- */}

                    <CheckboxGroup
                        label="Disabled invalid options"
                        description="These options are disabled and invalid"
                        isDisabled
                        isInvalid
                        fieldError="These options are unavailable"
                    >
                        <Checkbox
                            id="checkbox-group-disabled-invalid-one"
                            name="checkbox-group-disabled-invalid-one"
                            label="Option one"
                            value={true}
                            isDisabled
                            isInvalid
                            onChange={() => {}}
                        />

                        <Checkbox
                            id="checkbox-group-disabled-invalid-two"
                            name="checkbox-group-disabled-invalid-two"
                            label="Option two"
                            value={false}
                            isDisabled
                            isInvalid
                            onChange={() => {}}
                        />
                    </CheckboxGroup>

                </div>
            </div>

        </div>
    );
};