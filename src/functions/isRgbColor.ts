export function isRgbColor(color: string): boolean {
    const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
    const result = rgbRegex.exec(color);
    return result !== null && result.slice(1).every(num => parseInt(num) >= 0 && parseInt(num) <= 255);
}