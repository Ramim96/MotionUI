import * as yup from "yup";
// Contexts
import { FormFieldDataType } from "@contexts/FromContext";

export const TestData: Record<string, FormFieldDataType> = {
    text: "",
    number: 0,
    checkbox: false,
    email: "",
    password: "",
    search: "",
    tel: "",
    url: "",
    range: 50,
    date: "",
};

export const TestValidationSchema = yup.object({
    text: yup
        .string()
        .required("Text is required")
        .default(""),

    number: yup
        .number()
        .min(1, "Number must be greater than 0")
        .required("Number is required")
        .default(0),

    checkbox: yup
        .boolean()
        .oneOf([true], "Checkbox must be checked")
        .default(false),

    email: yup
        .string()
        .required("Email is required")
        .default(""),

    password: yup
        .string()
        .required("Password is required")
        .default(""),

    search: yup
        .string()
        .required("Search is required")
        .default(""),

    tel: yup
        .string()
        .required("Telephone number is required")
        .default(""),

    url: yup
        .string()
        .required("URL is required")
        .default(""),

    range: yup
        .number()
        .min(1, "Range must be at least 1")
        .max(100, "Range must not exceed 100")
        .required("Range is required")
        .default(0),

    date: yup
        .string()
        .required("Date is required")
        .default(""),
});