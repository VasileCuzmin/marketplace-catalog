import type { Diagnostic, ValidationResult } from './validation.ts';

export function validateSpecificationEntry(data: unknown): ValidationResult {
  const diagnostics: Diagnostic[] = [];
  const obj = data as Record<string, unknown>;

  for (const field of ['label', 'value']) {
    if (typeof obj[field] !== 'string') {
      diagnostics.push({ field, expected: 'string', received: typeof obj[field] });
    }
  }

  return diagnostics.length === 0 ? { valid: true } : { valid: false, diagnostics };
}
