export interface PreloadOptions {
    width?: number;   // force image width
    height?: number;  // force image height
}

export async function preloadImages(
    urls: string[],
    onProgress?: (loaded: number, total: number, url: string) => void,
    options: PreloadOptions = {}
): Promise<Record<string, HTMLImageElement>> {
    const unique = Array.from(new Set(urls.filter(Boolean)));
    const total = unique.length;
    let loaded = 0;

    const result: Record<string, HTMLImageElement> = {};

    await Promise.all(
        unique.map((u) => {
            const key = new URL(u, window.location.origin).toString();

            return new Promise<void>((resolve) => {
                const img = new Image();

                if (options.width) img.width = options.width;
                if (options.height) img.height = options.height;

                img.onload = img.onerror = () => {
                    result[key] = img;
                    loaded += 1;
                    onProgress?.(loaded, total, key);
                    resolve();
                };

                img.src = key;
            });
        })
    );

    return result;
}
