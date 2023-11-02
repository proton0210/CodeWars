export function race(
  v1: number,
  v2: number,
  g: number
): [number, number, number] | null {
  if (v1 >= v2) return null;

  let timeInHours: number = g / (v2 - v1);

  let totalSeconds: number = Math.floor(timeInHours * 3600);
  let hours: number = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes: number = Math.floor(totalSeconds / 60);
  let seconds: number = totalSeconds % 60;

  return [hours, minutes, seconds];
}
