const colors: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedResistorValue(arr: string[]) {
  let ohms = ((colors.indexOf(arr[0]) * 10) + colors.indexOf(arr[1])) * (10 ** colors.indexOf(arr[2]));
  if (ohms < 999) return `${ohms} ohms`;
  if (ohms < 999999) return `${ohms/1000} kiloohms`;
  if (ohms < 999999999) return `${ohms/1000000} megaohms`;
  return `${ohms/1000000000} gigaohms`;
}
