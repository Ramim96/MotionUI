// Utils
import { generateURL, GetRequestQuery } from "@lib/utils/api-utils";

interface UseApiProps {
    Get: <TResponse>(url: string, id?: string, query?: GetRequestQuery) => Promise<TResponse | undefined>;
    Post: <TData>(url: string, data: TData) => Promise<void>;
    Put: <TData>(url: string, data: TData) => Promise<void>;
    Delete: (url: string, id: string) => Promise<void>;
};

export const useApi = (): UseApiProps => {

    const Get = async <TResponse>(url: string, id?: string, query?: GetRequestQuery): Promise<TResponse | undefined> => {
        
        const fullUrl: string = generateURL(url, id, query);

        const request: Request = new Request(fullUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            },
        });

        return sendRequest(request);
    };

    const Post = async <TData>(url: string, data: TData): Promise<void> => {

        const fullUrl: string = generateURL(url);

        const request: Request = new Request(fullUrl, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        await sendRequest(request);
    };

    const Put = async <TData>(url: string, data: TData): Promise<void> => {

        const fullUrl: string = generateURL(url);

        const request: Request = new Request(fullUrl, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        await sendRequest(request);
    };

    const Delete = async (url: string, id: string): Promise<void> => {
         
        const fullUrl: string = generateURL(url, id);

        const request: Request = new Request(fullUrl, {
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            },
        });

        await sendRequest(request);
    };

    const sendRequest = async <TResponse>(request: Request): Promise<TResponse | undefined> => {

        try {
            const response = await fetch(request);

            if (!response.ok) {
                // Failure toast
            }

            return response.json();
        }
        catch (ex) {
            // Failure toast

            return undefined;
        }
    };

    return {
        Get,
        Post,
        Put,
        Delete,
    };
};