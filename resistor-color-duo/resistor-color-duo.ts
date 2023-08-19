const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedValue(array: any): number {
  return (colors.indexOf(array[0]) * 10) + colors.indexOf(array[1]);
}

