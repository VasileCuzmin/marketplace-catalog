export type Diagnostic = {
    field: string;
    expected: string;
    received: string;
}
type ValidationSuccess = { valid: true };
type ValidationFailure = { valid: false; diagnostics: Diagnostic[] };

export type ValidationResult = ValidationSuccess | ValidationFailure;