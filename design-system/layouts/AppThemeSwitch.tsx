"use client";

// Components
import { IconVariant } from "@icons/IconVariant";
import { Switch } from "@components/switch/Switch";
// Contexts
import { useAppUserContext } from "@hooks/useAppUserContext";

export const AppThemeSwitch = () => {

    const { theme, setTheme } = useAppUserContext();

    const handleAppThemeChange = (): void => {
        
        if (theme === "light") {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    };

    return (
        <Switch
            name="theme"
            isSelected={theme === "light"}
            value={theme}
            iconVariantSelected={IconVariant.Sun}
            iconVariantUnselected={IconVariant.Moon}
            size="lg"
            onChange={handleAppThemeChange}
        />
    );
};