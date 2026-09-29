import type { Diagnostic } from "./validation";

export class ValidationError extends Error {
    public readonly diagnostics: Diagnostic[];

    constructor(diagnostics: Diagnostic[]) {
        super("Validation failed");
        this.name = "ValidationError";
        this.diagnostics = diagnostics;
    }
}