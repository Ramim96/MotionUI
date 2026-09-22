"use client";

import { useState } from "react";
// Components
import { Slider } from "@design-system/ui/slider";
// Utils
import { cn } from "../lib/utils/css";

export const SandboxSlider = () => {

    const [slider, setSlider] = useState<number>(50);
    const [emptySlider, setEmptySlider] = useState<number | number[] | undefined>([]);
    const [rangeSlider, setRangeSlider] = useState<number[]>([25, 75]);
    const [invalidSlider, setInvalidSlider] = useState<number>(50);
    const [stepSlider, setStepSlider] = useState<number>(50);
    const [currencySlider, setCurrencySlider] = useState<number>(1250);

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Slider</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled slider */}
                    <Slider
                        id="slider-default"
                        label="Slider"
                        description="Select a value"
                        value={slider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setSlider(value as number)}
                    />

                    {/* Empty */}
                    <Slider
                        id="slider-empty"
                        label="Empty slider"
                        description="No value selected"
                        value={emptySlider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setEmptySlider(value)}
                    />

                    {/* Disabled */}
                    <Slider
                        id="slider-disabled"
                        label="Disabled slider"
                        description="This slider is disabled"
                        value={50}
                        minValue={0}
                        maxValue={100}
                        onChange={() => {}}
                    />

                    {/* Range */}
                    <Slider
                        id="slider-range"
                        label="Range slider"
                        description="Select a range"
                        value={rangeSlider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setRangeSlider(value as number[])}
                    />

                    {/* Invalid */}
                    <Slider
                        id="slider-invalid"
                        label="Invalid slider"
                        value={invalidSlider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setInvalidSlider(value as number)}
                    />

                    {/* Invalid with error */}
                    <Slider
                        id="slider-invalid-error"
                        label="Invalid slider with error"
                        description="This slider has a validation error"
                        value={invalidSlider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setInvalidSlider(value as number)}
                    />

                    {/* Min / max */}
                    <Slider
                        id="slider-min-max"
                        label="Slider range"
                        description="Allowed range: 0–100"
                        value={slider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setSlider(value as number)}
                    />

                    {/* Step */}
                    <Slider
                        id="slider-step"
                        label="Slider with step"
                        description="Increments by 10"
                        value={stepSlider}
                        minValue={0}
                        maxValue={100}
                        step={10}
                        onChange={(value?: number | number[]) => setStepSlider(value as number)}
                    />

                    {/* Format options */}
                    <Slider
                        id="slider-currency"
                        label="Formatted slider"
                        description="Currency formatting"
                        value={currencySlider}
                        minValue={0}
                        maxValue={5000}
                        step={50}
                        formatOptions={{
                            style: "currency",
                            currency: "USD",
                        }}
                        onChange={(value?: number | number[]) => setCurrencySlider(value as number)}
                    />

                    {/* Vertical */}
                    <Slider
                        id="slider-vertical"
                        label="Vertical slider"
                        description="Vertical orientation"
                        value={slider}
                        minValue={0}
                        maxValue={100}
                        orientation="vertical"
                        onChange={(value?: number | number[]) => setSlider(value as number)}
                    />

                    {/* No label */}
                    <Slider
                        id="slider-no-label"
                        description="Slider without a label"
                        ariaLabel="no-label"
                        value={slider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setSlider(value as number)}
                    />

                    {/* No label or description */}
                    <Slider
                        id="slider-no-label-no-description"
                        ariaLabel="no-label-no-description"
                        value={slider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setSlider(value as number)}
                    />

                    {/* Full width */}
                    <Slider
                        id="slider-full-width"
                        label="Full width slider"
                        description="This slider uses the full available width"
                        value={slider}
                        minValue={0}
                        maxValue={100}
                        fullWidth
                        onChange={(value?: number | number[]) => setSlider(value as number)}
                    />

                    {/* Custom aria-label */}
                    <Slider
                        id="slider-aria-label"
                        label="Volume"
                        description="Custom accessible name"
                        value={slider}
                        minValue={0}
                        maxValue={100}
                        onChange={(value?: number | number[]) => setSlider(value as number)}
                    />

                </div>
            </div>
        </div>
    );
};