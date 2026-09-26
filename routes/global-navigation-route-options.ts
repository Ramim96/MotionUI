// Common
import { NextNavigationRouteOption } from "../interfaces/components/next-navigation-route";

// #region Global navigation

export const GlobalNavigationRouteOptions: NextNavigationRouteOption[] = [
    {
        routeOptionCode: "dashboard",
        routeOptionName: "Dashboard",
        routeOptionPath: "/dashboard",
    },
    {
        routeOptionCode: "employees",
        routeOptionName: "Employees",
        routeOptionPath: "/employees",
    },
    {
        routeOptionCode: "company-settings",
        routeOptionName: "Company settings",
        routeOptionPath: "/company-settings",
    },
    {
        routeOptionCode: "global-settings",
        routeOptionName: "Global settings",
        routeOptionPath: "/global-settings",
    },
];

// #endregion Global navigation