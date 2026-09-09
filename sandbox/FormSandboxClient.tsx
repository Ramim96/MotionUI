"use client";

// Components
import { Form } from "@forms/Form";
// Components
import { FormInputField } from "@forms/FormInputField";
import { InputFieldVariant } from "@input-fields/InputContainer";
// Test data
import { TestData, TestValidationSchema } from "./SandboxData";
// Utils
import { cn } from "@utils/css";

export const FormSandboxClient = () => {

    const onSubmitHandler = (values: any) => {

        console.log(values);
    };

    return (
        <div className={cn("flex flex-col gap-y-3 p-5")}>
            <Form
                initialValues={TestData}
                validationSchema={TestValidationSchema}
                gridCols={3}
                onSubmit={onSubmitHandler}
            >
                <FormInputField
                    type={InputFieldVariant.Text}
                    id="text"
                    label="Text"
                    tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, sapien nec tincidunt consequat, justo erat feugiat nisl."
                />
                <FormInputField
                    type={InputFieldVariant.Number}
                    id="number"
                    label="Number"
                />
                <FormInputField
                    type={InputFieldVariant.Checkbox}
                    id="checkbox"
                    label="Checkbox"
                    labelPosition="left"
                />
                <FormInputField
                    type={InputFieldVariant.Email}
                    id="email"
                    label="Email"
                />
                <FormInputField
                    type={InputFieldVariant.Password}
                    id="password"
                    label="Password"
                />
                <FormInputField
                    type={InputFieldVariant.Search}
                    id="search"
                    label="Search"
                />
                <FormInputField
                    type={InputFieldVariant.Tel}
                    id="tel"
                    label="Telephone"
                />
                <FormInputField
                    type={InputFieldVariant.Url}
                    id="url"
                    label="URL"
                />
                <FormInputField
                    type={InputFieldVariant.Range}
                    id="range"
                    label="Range"
                />
                <FormInputField
                    type={InputFieldVariant.Date}
                    id="date"
                    label="Date"
                />
            </Form>
        </div>
    );
};