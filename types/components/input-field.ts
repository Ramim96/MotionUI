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

export type TooltipPlacementType =
    | "bottom"
    | "bottom left"
    | "bottom right"
    | "bottom start"
    | "bottom end"
    | "top"
    | "top left"
    | "top right"
    | "top start"
    | "top end"
    | "left"
    | "left top"
    | "left bottom"
    | "start"
    | "start top"
    | "start bottom"
    | "right"
    | "right top"
    | "right bottom"
    | "end"
    | "end top"
    | "end bottom"

export type TooltipTriggerType = 
    | "hover"
    | "focus"