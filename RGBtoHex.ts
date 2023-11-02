export function rgb(r: number, g: number, b: number): string {
  const toHex = (color: number): string => {
    const clampedValue = Math.max(0, Math.min(255, color));
    const hex = clampedValue.toString(16).toUpperCase();

    return hex.length === 1 ? `0${hex}` : hex;
  };

  return toHex(r) + toHex(g) + toHex(b);
}
