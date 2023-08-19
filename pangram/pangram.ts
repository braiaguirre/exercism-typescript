export function isPangram(str: string): boolean {
  return new Set(str.toLowerCase().match(/[a-z]/g)).size == 26;
}
