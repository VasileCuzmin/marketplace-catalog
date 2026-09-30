import type { ValidationResult, Diagnostic } from './validation.ts';

export type PaginatedResponse<T> = {
    data: T[];
    meta: {
        total: number;// Total number of items across all pages
        page: number;// Current page number
        pageSize: number;// Number of items per page
        totalPages: number;// Total number of pages
    };
};

export function validatePaginatedResponse<T>(
    data: unknown,
    validator: (data: unknown) => ValidationResult
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


    // cast data to a record for easier property access
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
    }
    else {
        const meta = obj.meta as Record<string, unknown>;
        for (const field of ['total', 'page', 'pageSize', 'totalPages']) {
            if (typeof meta[field] !== 'number') {
                diagnostics.push({
                    expected: 'number',
                    field: `meta.${field}`,
                    received: typeof meta[field]
                });
            }
        }
    }

    if (diagnostics.length > 0) {
        return { valid: false, diagnostics };
    }

    const items = obj.data as unknown[];
    for (let i = 0; i < items.length; i++) {
        const validationItemResult = validator(items[i]);
        if (!validationItemResult.valid) {
            diagnostics.push(...validationItemResult.diagnostics);
        }
    }

    return { valid: diagnostics.length === 0, diagnostics };
}