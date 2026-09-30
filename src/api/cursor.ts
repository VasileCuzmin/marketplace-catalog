// Create helper functions to safely encode and decode cursors.
// Using composite attributes(e.g., createdAt + id) prevents pagination issues when multiple records share the exact same timestamp.

import { Buffer } from "buffer";

export interface CursorPayload {
    id: string;
    createdAt: number; // Unix timestamp in milliseconds
}

export const encodeCursor = (payload: CursorPayload): string => {
    return Buffer.from(JSON.stringify(payload)).toString('base64');
};
export const decodeCursor = (cursor: string): CursorPayload => {
    return JSON.parse(Buffer.from(cursor, 'base64').toString('utf-8'));
};
