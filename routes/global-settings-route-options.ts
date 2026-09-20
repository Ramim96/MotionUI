// Common
import { NextNavigationRouteGroup } from "../shared/interfaces/next-navigation-route";

// #region Global settings

export const GlobalSettingsRouteOptions: NextNavigationRouteGroup[] = [
    {
        groupCode: "users",
        groupName: "Users",
        path: "/global-settings",
        routeOptions: [
            {
                routeOptionCode: "global-app-users",
                routeOptionName: "App users",
                routeOptionPath: "/global-app-users",
            },
            {
                routeOptionCode: "global-app-roles",
                routeOptionName: "App roles",
                routeOptionPath: "/global-app-roles",
            },
        ],
    },
];

// #endregion Global settings