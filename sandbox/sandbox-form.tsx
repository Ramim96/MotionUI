"use client";

// Components
import { Form } from "@design-system/ui/form";
import { FormInputField } from "@design-system/ui/form-input-field";
import { RadioField } from "@design-system/ui/radio-field";
import { TestData, TestValidationSchema } from "./data/sandbox-form-data";
// Context
import { FormFieldDataType } from "@contexts/form-context";
// Utils
import { cn } from "@lib/utils/css-utils";

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
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="number"
                    id="form-number"
                    name="number"
                    label="Number"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="checkbox"
                    id="form-checkbox"
                    name="checkbox"
                    label="Accept terms"
                    description="You must accept the terms before submitting"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="email"
                    id="form-email"
                    name="email"
                    label="Email"
                    description="Provide an email to get in touch"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="password"
                    id="form-password"
                    name="password"
                    label="Password"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="search"
                    id="form-search"
                    name="search"
                    label="Search"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="tel"
                    id="form-tel"
                    name="tel"
                    label="Tel"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="url"
                    id="form-url"
                    name="url"
                    label="URL"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="switch"
                    id="form-switch"
                    name="switch"
                    label="Switch"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
                <FormInputField
                    type="radio"
                    id="form-radio"
                    name="radio"
                    label="Radio"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
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
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                    fullWidth
                />
                <FormInputField
                    type="textarea"
                    id="form-textarea"
                    name="textarea"
                    label="Textarea"
                    tooltip={<p>Ramim was here but he goes by Nomad nowadays</p>}
                    isRequired
                />
            </Form>
        </div>
    );
};