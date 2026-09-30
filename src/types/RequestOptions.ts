import type { ValidationResult } from "./validation";

export type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    params?: Record<string, string | number | boolean | undefined>; // Optional query parameters for the request
    signal?: AbortSignal; // Optional signal to abort the request
    body?: unknown;
    validate?: (data: unknown) => ValidationResult;// Optional validation function for the response data
}