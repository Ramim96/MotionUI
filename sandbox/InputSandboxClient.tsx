"use client";

import { useState } from "react";

// Components
import { TextInput } from "@input-fields/InputText";
import { PasswordInput } from "@input-fields/Password";
import { CheckboxInput } from "@input-fields/Checkbox";
import { NumberInput } from "@input-fields/Number";
import { RangeInput } from "@input-fields/Range";
import { SearchInput } from "@input-fields/Search";
import { ToggleSwitch } from "@input-fields/ToggleSwitch";
import { IconVariant } from "@icons/IconVariant";
import { DatePicker } from "@input-fields/DatePicker";
// Utils
import { cn } from "@utils/css";

export const InputSandboxClient = () => {

    const [text, setText] = useState<string | undefined>("");
    const [email, setEmail] = useState<string | undefined>("");
    const [password, setPassword] = useState<string | undefined>("");
    const [search, setSearch] = useState<string | undefined>("");
    const [phone, setPhone] = useState<string | undefined>("");
    const [url, setUrl] = useState<string | undefined>("");

    const [number, setNumber] = useState<number | undefined>(undefined);
    const [range, setRange] = useState<number | undefined>(50);

    const [checked, setChecked] = useState(false);
    const [toggled, setToggled] = useState<boolean>(false);

    const [date, setDate] = useState<string>("");

    return (
        <div className={cn("flex flex-col justify-center items-center gap-8 p-8")}>
            <TextInput
                type="text"
                id="text"
                name="text"
                value={text}
                placeholder="Enter your name"
                helperText="Yolo I was here so I can do whatever I want"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
            />

            <TextInput
                type="email"
                id="email"
                name="email"
                label="Email"
                value={email}
                placeholder="Enter your email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
            />

            <TextInput
                type="tel"
                id="phone"
                name="phone"
                label="Phone"
                value={phone}
                placeholder="+44 20 1234 5678"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.currentTarget.value)}
            />

            <TextInput
                type="url"
                id="website"
                name="website"
                label="Website"
                value={url}
                placeholder="https://example.com"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.currentTarget.value)}
            />
            
            <PasswordInput
                id="password"
                name="password"
                label="Password"
                value={password}
                placeholder="Enter your password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
            />

            <RangeInput
                id="range"
                name="range"
                label="Range"
                min={0}
                max={100}
                step={1}
                value={range}
                onValueChange={setRange}
            />

            <SearchInput
                id="search"
                name="search"
                label="Search"
                min={0}
                max={100}
                step={1}
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
                onClear={() => setSearch("")}
            />

            <NumberInput
                id="number"
                name="number"
                label="Number"
                value={number}
                min={-2}
                max={11}
                step={2}
                onValueChange={(value) => setNumber(Number(value))}
            />

            <CheckboxInput
                id="terms"
                name="terms"
                label="Terms"
                checked={checked}
                containerSize={cn("sm:w-[4rem]")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)}
            />

            <ToggleSwitch
                id="theme"
                label="Theme"
                checked={toggled}
                iconVariantTrue={IconVariant.Sun}
                iconVariantFalse={IconVariant.Moon}
                containerSize={cn("w-20")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
                onValueChange={() => {}}
            />

            <DatePicker
                id="date"
                name="Date"
                label="Date"
                value={date}
                helperText="Ramim was here"
                onValueChange={(value: string) => setDate(value)}
            />
        </div>
    );
};