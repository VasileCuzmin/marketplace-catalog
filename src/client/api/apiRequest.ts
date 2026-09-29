import { ApiError } from "../../types/ApiError";
import type { RequestOptions } from "../../types/RequestOptions";
import { ValidationError } from "../../types/ValidationError";

export async function apiRequest<T = unknown>(url: string, options?: RequestOptions): Promise<T> {
    const headers: Record<string, string> = { ...options?.headers };
    let body: string | undefined;
    if (options?.body !== undefined) {
        body = JSON.stringify(options.body);
        if (!headers['Content-Type']) {
            headers['Content-Type'] = 'application/json';
        }
    }

    const response = await fetch(url, {
        method: options?.method,
        headers,
        body,
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