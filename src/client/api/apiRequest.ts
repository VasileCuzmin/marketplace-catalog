import { ApiError } from "../../types/ApiError";

export async function apiRequest<T = unknown>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new ApiError(response.status, response.statusText);
    }

    const result = await response.json();
    return result;
}