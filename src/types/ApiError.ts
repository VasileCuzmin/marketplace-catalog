export class ApiError extends Error {
    public status: number;
    public statusText: string;

    constructor(status: number, statusText: string) {
        super(`${status} - ${statusText}`);
        this.name = 'ApiError';
        this.status = status;
        this.statusText = statusText;
    }
}

