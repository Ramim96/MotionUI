"use client";

import * as yup from "yup";
import { DateValue } from "@internationalized/date";
// Contexts
import { FormFieldDataType } from "@contexts/form-context";

export const TestData: Record<string, FormFieldDataType> = {
    text: "",
    number: 0,
    checkbox: false,
    email: "",
    password: "",
    search: "",
    tel: "",
    url: "",
    date: null,
    switch: false,
    radio: "",
    textarea: ""
};

export const TestValidationSchema = yup.object({
    text: yup
        .string()
        // .required("Text is required")
        .default(""),

    number: yup
        .number()
        .min(1, "Number must be greater than 0")
        // .required("Number is required")
        .default(0),

    checkbox: yup
        .boolean()
        .oneOf([true], "An option must be selected")
        // .required("An option must be selected")
        .default(false),

    email: yup
        .string()
        .trim()
        .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address"
        )
        // .required("Email is required")
        .default(""),

    password: yup
        .string()
        // .required("Password is required")
        .default(""),

    search: yup
        .string()
        // .required("Search is required")
        .default(""),

    tel: yup
        .string()
        .matches(
            /^\+[1-9]\d{7,14}$/,
            "Please enter a valid telephone number with country code"
        )
        // .required("Telephone number is required")
        .default(""),

    url: yup
        .string()
        // .required("URL is required")
        .default(""),

    date: yup
        .mixed<DateValue>()
        .nullable()
        .required("Date is required")
        .default(null),

    switch: yup
        .boolean()
        .oneOf([true], "An option must be selected")
        // .required("An option must be selected")
        .default(false),

    radio: yup
        .string()
        // .required("An option must be selected")
        .default(""),

    textarea: yup
        .string()
        .required("Comment must be provided")
        .default(""),
});