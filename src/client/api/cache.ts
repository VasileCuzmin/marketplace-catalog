type CacheEntry<T> = {
    value: T;
    expiresAt: number;//UNIX timestamp indicating when the cache entry expires
}

export class Cache<T> {
    private store = new Map<string, CacheEntry<T>>();

    get(key: string): T | undefined {
        const entry = this.store.get(key);
        if (!entry) {
            return undefined;
        }

        if (entry.expiresAt < Date.now()) {
            this.store.delete(key);
            return undefined;
        }

        return entry.value;
    }
    //ttl - time to live in milliseconds
    set(key: string, value: T, ttl: number): void {
        const expiresAt = Date.now() + ttl;
        this.store.set(key, { value, expiresAt });
    }

    clear(): void {
        this.store.clear();
    }
}