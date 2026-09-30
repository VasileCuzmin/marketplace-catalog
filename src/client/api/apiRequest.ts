import { ApiError } from "../../types/ApiError";
import type { RequestOptions } from "../../types/RequestOptions";
import { ValidationError } from "../../types/ValidationError";

export function buildUrl(url: string,
    params?: Record<string, string | number | boolean | undefined>): URL {

    const result = new URL(url, window.location.origin);
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined) {
                result.searchParams.append(key, String(value));
            }
        }
    }
    return result;
}


export async function apiRequest<T = unknown>(url: string, options?: RequestOptions): Promise<T> {
    const headers: Record<string, string> = { ...options?.headers };
    let body: string | undefined;
    if (options?.body !== undefined) {
        body = JSON.stringify(options.body);
        if (!headers['Content-Type']) {
            headers['Content-Type'] = 'application/json';
        }
    }

    const finalUrl = buildUrl(url, options?.params);

    const response = await fetch(finalUrl, {
        method: options?.method,
        headers,
        body,
        signal: options?.signal
    });

    if (!response.ok) {
        throw new ApiError(response.status, response.statusText);
    }

    const result = await response.json();

    if (options?.validate) {
        const validation = options.validate(result);
        if (!validation.valid) {
            console.error('[Validation]', validation.diagnostics);
            throw new ValidationError(validation.diagnostics);
        }
    }

    return result as T;
}