"use client";

// Components
import { IconVariant } from "@design-system/icons/icon-variants";
import { Switch } from "@design-system/ui/switch";
// Contexts
import { useAppUserContext } from "@hooks/use-app-user-context";

export const ThemeSwitch = () => {

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
            iconVariantSelected={IconVariant.Sun}
            iconVariantUnselected={IconVariant.Moon}
            size="lg"
            onChange={handleAppThemeChange}
        />
    );
};