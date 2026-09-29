import { ValidationResult, Diagnostic } from './validation'


export interface ApiResponse<T> {
    data: T | null;
    meta: {
        total?: number;
    }
}


export function validateApiResponse<T>(data: unknown, validator: (item: unknown) => ValidationResult): ValidationResult {
    if (typeof data !== 'object' || data === null) {
        return {
            valid: false,
            diagnostics: [
                {
                    field: 'data',
                    expected: 'object',
                    received: data === null ? 'null' : typeof data,
                }
            ]
        }
    }

    const response = data as ApiResponse<T[]>;
    const diagnostics: Diagnostic[] = [];

    if (typeof response.meta !== 'object' || response.meta === null) {
        diagnostics.push({
            field: 'meta',
            expected: 'object',
            received:
                response.meta === null ? 'null' : typeof response.meta,
        });
    } else if (typeof response.meta.total !== 'number') {
        diagnostics.push({
            field: 'meta.total',
            expected: 'number',
            received: typeof response.meta.total,
        });
    }


    if (!Array.isArray(response.data)) {
        diagnostics.push({
            field: 'data',
            expected: 'array',
            received: typeof response.data,
        });
        return { valid: false, diagnostics };
    }

    response.data.forEach((item, index) => {
        const itemResult = validator(item);
        if (!itemResult.valid) {
            diagnostics.push(...itemResult.diagnostics.map(diagnostic => ({
                ...diagnostic,
                field:
                    diagnostic.field === ''
                        ? `data[${index}]`
                        : `data[${index}].${diagnostic.field}`,
            })));
        }
    })


    return diagnostics.length === 0
        ? { valid: true }
        : { valid: false, diagnostics };
}


export function validateApiItemResponse(
    data: unknown,
    validateItem: (item: unknown) => ValidationResult,
): ValidationResult {
    if (typeof data !== 'object' || data === null) {
        return {
            valid: false,
            diagnostics: [
                {
                    field: '',
                    expected: 'object',
                    received: data === null ? 'null' : typeof data,
                },
            ],
        };
    }

    const response = data as ApiResponse<unknown>;
    const diagnostics: Diagnostic[] = [];

    if (typeof response.meta !== 'object' || response.meta === null) {
        diagnostics.push({
            field: 'meta',
            expected: 'object',
            received:
                response.meta === null ? 'null' : typeof response.meta,
        });
    } else if (typeof response.meta.total !== 'number') {
        diagnostics.push({
            field: 'meta.total',
            expected: 'number',
            received: typeof response.meta.total,
        });
    }

    const itemResult = validateItem(response.data);
    if (!itemResult.valid) {
        for (const diagnostic of itemResult.diagnostics) {
            diagnostics.push({
                ...diagnostic,
                field:
                    diagnostic.field === ''
                        ? 'data'
                        : `data.${diagnostic.field}`,
            });
        }
    }

    return diagnostics.length === 0
        ? { valid: true }
        : { valid: false, diagnostics };
}