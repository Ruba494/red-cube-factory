export function getAsset(path: string): string {
    // Works both in dev and production
    return import.meta.env.BASE_URL+path;
}