import {
    Label,
    Slider as HeroSlider,
    Orientation
} from "@heroui/react";
// Components
import { Description } from "@design-system/ui/typography";
// Interfaces
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldStyleComponentProps,
    FieldValueComponentProps
} from "../../interfaces/input-field";
// Utils
import { cn } from "@lib/utils/css";

interface SliderComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "name" | "variant" | "placeholder">,
    FieldValueComponentProps<number | number[] | undefined>,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<number | number[] | undefined> {
    orientation?: Orientation;
    minValue?: number;
    maxValue?: number;
    step?: number;
    formatOptions?: Intl.NumberFormatOptions;
};

export const Slider = ({
    orientation,
    minValue,
    maxValue,
    step,
    formatOptions,
    // FieldBaseComponentProps
    id,
    label,
    ariaLabel,
    description,
    // FieldValueComponentProps
    value,
    // FieldStyleComponentProps
    fullWidth,
    className,
    // FieldBehaviourComponentProps
    onChange,
}: SliderComponentProps) => {

    return (
        <HeroSlider
            id={id}
            aria-label={
                label
                    ? undefined
                    : ariaLabel
            }
            value={value}
            orientation={orientation}
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            formatOptions={formatOptions}
            className={cn(
                className,
                fullWidth && "w-full",
            )}
            onChange={onChange}
        >
            {
                label &&
                    <Label htmlFor={id}>{label}</Label>
            }
            <HeroSlider.Output />
            <HeroSlider.Track>
                <HeroSlider.Fill />
                <HeroSlider.Thumb />
            </HeroSlider.Track>
            {
                description &&
                    <Description>{description}</Description>
            }
        </HeroSlider>
    );
};