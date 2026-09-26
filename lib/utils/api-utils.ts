// Utils
import { getEnvVariable } from "./env-utils";

export type GetRequestQuery = {
    page?: number;
    pageItems?: number;
    searchFilter?: string;
};

export const generateURL = (url: string, pathSegment?: string, requestQuery?: GetRequestQuery): string => {

    if (!url.trim()) throw new Error("URL cannot be empty");

    if (pathSegment) url += `/${pathSegment}`;

    if (requestQuery && Object.keys(requestQuery).length > 0) {
        const queryParams = new URLSearchParams();

        for (const [key, value] of Object.entries(requestQuery)) {
            queryParams.append(key, String(value));
        }

        url += `?${queryParams.toString()}`;
    }

    const appUrl: string = getEnvVariable("NEXT_PUBLIC_APP_URL");

    return `${appUrl}${url}`;
};