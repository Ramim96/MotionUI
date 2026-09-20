export type VariantType =
    | "primary"
    | "secondary";

export type TextFieldType =
    | "search"
    | "text"
    | (string & {})
    | "email"
    | "url"
    | "tel"
    | "password";