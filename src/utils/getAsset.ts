export function getAsset(path: string): string {
    // Works both in dev and production
    return new URL(path, import.meta.url).href;
}