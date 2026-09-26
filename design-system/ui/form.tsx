"use client";

import { Button, Form as HeroForm } from "@heroui/react";
import { LucideIcon } from "lucide-react";
// Components
import { IconFactory } from "@design-system/icons/icon-factory";
import { IconVariant } from "@design-system/icons/icon-variants";
// Contexts
import { FormContextProvider, FormFieldDataType } from "@contexts/form-context";
// Hooks
import { useFormContext } from "@hooks/use-form-context";
// Utils
import { cn } from "@lib/utils/css-utils";

// #region Form

interface FormComponentProps {
    initialValues: Record<string, FormFieldDataType>,
    validationSchema: any;
    children: React.ReactNode;
    gridCols?: number;
    onSubmit: (formValues: Record<string, FormFieldDataType>) => void;
};

export const Form = ({
    initialValues,
    validationSchema,
    children,
    gridCols,
    onSubmit,
}: FormComponentProps) => {

    return (
        <FormContextProvider
            values={initialValues}
            validationSchema={validationSchema}
        >
            <FormContent
                gridCols={gridCols}
                onSubmit={onSubmit}
            >
                {children}
            </FormContent>
        </FormContextProvider>
    );
};

// #endregion Form

// #region Form content

interface FormContentComponentProps {
    children: React.ReactNode;
    gridCols?: number;
    onSubmit: (formValues: Record<string, FormFieldDataType>) => void;
};

const CheckIcon: LucideIcon = IconFactory[IconVariant.Check]

const FormContent = ({
    children,
    gridCols = 1,
    onSubmit,
}: FormContentComponentProps) => {

    const grid = {
        1: "grid grid-cols-1",
        2: "grid grid-cols-2",
        3: "grid grid-cols-3",
        4: "grid grid-cols-4",
        5: "grid grid-cols-5",
        6: "grid grid-cols-6",
        7: "grid grid-cols-7",
        8: "grid grid-cols-8",
        9: "grid grid-cols-9",
        10: "grid grid-cols-10"
    }[gridCols];

    // Contexts
    const { formValues, validate, resetForm } = useFormContext();

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {

        e.preventDefault();

        const validationResult: boolean = validate();
        if (!validationResult) {
            return;
        }

        onSubmit(formValues);
    };

    const onResetHandler = (): void => {

        resetForm();
    };

    return (
        <HeroForm
            validationBehavior="aria"
            className={cn("flex flex-col gap-y-4")}
            onSubmit={onSubmitHandler}
            onReset={onResetHandler}
        >
            <div className={cn("gap-5", grid)}>
                {children}
            </div>
            <div className={cn("flex justify-end gap-x-3")}>
                <Button type="submit">
                    <CheckIcon />
                    Submit
                </Button>
                <Button type="reset" variant="secondary">
                    Reset
                </Button>
            </div>
        </HeroForm>
    );
};

// #endregion Form content