export interface NextNavigationRouteOption {
    routeOptionCode: string;
    routeOptionName: string;
    routeOptionPath: string;
};

export interface NextNavigationRouteGroup {
    groupCode: string;
    groupName: string;
    path: string;
    routeOptions: NextNavigationRouteOption[];
};

