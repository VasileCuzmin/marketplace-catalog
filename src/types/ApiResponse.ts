
export interface ApiResponse<T> {
    data: T | null;
    meta: {
        total?: number;
    }
}
