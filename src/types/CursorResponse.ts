import { Diagnostic, ValidationResult } from "./validation";

export type CursorResponse<T> = {
    data: T[];
    meta: {
        nextCursor: string | null;
    }
};

export function validateCursorResponse<T>(
    data: unknown,
    validateItem: (item: unknown) => ValidationResult,
): ValidationResult {
    const diagnostics: Diagnostic[] = [];

    if (typeof data !== 'object' || data === null) {
        return {
            valid: false,
            diagnostics: [{
                expected: 'object',
                field: '',
                received: typeof data
            }]
        };
    }

    const obj = data as Record<string, unknown>;

    if (!Array.isArray(obj.data)) {
        diagnostics.push({
            expected: 'array',
            field: 'data',
            received: typeof obj.data
        });
    }

    if (typeof obj.meta !== 'object' || obj.meta === null) {
        diagnostics.push({
            expected: 'object',
            field: 'meta',
            received: typeof obj.meta
        });
    } else {
        const meta = obj.meta as Record<string, unknown>;
        if (typeof meta.nextCursor !== 'string' && meta.nextCursor !== null) {
            diagnostics.push({
                expected: 'string or null',
                field: 'meta.nextCursor',
                received: typeof meta.nextCursor
            });
        }
    }

    if (diagnostics.length > 0) {
        return { valid: false, diagnostics };
    }

    const items = obj.data as unknown[];
    for (let i = 0; i < items.length; i++) {
        const result = validateItem(items[i]);
        if (!result.valid) {
            for (const d of result.diagnostics) {
                diagnostics.push({
                    expected: d.expected,
                    field: `data[${i}].${d.field}`,
                    received: d.received,
                });
            }
        }
    }

    return diagnostics.length > 0
        ? { valid: false, diagnostics }
        : { valid: true };
}
