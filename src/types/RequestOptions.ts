import type { ValidationResult } from "./validation";

export type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: unknown;
    validate?: (data: unknown) => ValidationResult;
}