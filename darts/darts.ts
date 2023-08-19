export function score(x: number, y: number): number {
  let coord = x ** 2 + y ** 2;
  if (coord > 100) return 0;
  if (coord > 25) return 1;
  if (coord > 1) return 5;
  return 10;
}
