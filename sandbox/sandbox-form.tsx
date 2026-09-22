"use client";

// Components
import { Form } from "@design-system/ui/form";
import { FormInputField } from "@design-system/ui/form-input-field";
import { FormFieldDataType } from "@contexts/form-context";
import { TestData, TestValidationSchema } from "./data/sandbox-form-data";
// Utils
import { cn } from "../lib/utils/css";
import { RadioField } from "@design-system/ui/radio-field";

export const SandboxForm = () => {

    const onSubmit = (formValues: Record<string, FormFieldDataType>): void => {

        console.log("Form submitted:", formValues);
    };

    return (
        <div className={cn("p-5")} >
            <Form
                initialValues={TestData}
                validationSchema={TestValidationSchema}
                gridCols={5}
                onSubmit={onSubmit}
            >
                <FormInputField
                    type="text"
                    id="form-text"
                    name="text"
                    label="Text"
                    isRequired
                />
                <FormInputField
                    type="number"
                    id="form-number"
                    name="number"
                    label="Number"
                    isRequired
                />
                <FormInputField
                    type="checkbox"
                    id="form-checkbox"
                    name="checkbox"
                    label="Accept terms"
                    description="You must accept the terms before submitting"
                    isRequired
                />
                <FormInputField
                    type="email"
                    id="form-email"
                    name="email"
                    label="Email"
                    description="Provide an email to get in touch"
                    isRequired
                />
                <FormInputField
                    type="password"
                    id="form-password"
                    name="password"
                    label="Password"
                    isRequired
                />
                <FormInputField
                    type="search"
                    id="form-search"
                    name="search"
                    label="Search"
                    isRequired
                />
                <FormInputField
                    type="tel"
                    id="form-tel"
                    name="tel"
                    label="Tel"
                    isRequired
                />
                <FormInputField
                    type="url"
                    id="form-url"
                    name="url"
                    label="URL"
                    isRequired
                />
                <FormInputField
                    type="switch"
                    id="form-switch"
                    name="switch"
                    label="Switch"
                    isRequired
                />
                <FormInputField
                    type="radio"
                    id="form-radio"
                    name="radio"
                    label="Radio"
                    isRequired
                >
                    <RadioField
                        value="option1"
                        label="Option 1"
                        description="This is option 1"
                    />
                    <RadioField
                            value="option2"
                            label="Option 2"
                            description="This is option 2"
                        />
                    <RadioField
                        value="option3"
                        label="Option 3"
                        description="This is option 3"
                    />
                </FormInputField>
                <FormInputField
                    type="date"
                    id="form-date"
                    name="date"
                    label="Date"
                    isRequired
                    fullWidth
                />
                <FormInputField
                    type="textarea"
                    id="form-textarea"
                    name="textarea"
                    label="Textarea"
                    isRequired
                />
            </Form>
        </div>
    );
};