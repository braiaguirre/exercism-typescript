export function toRna(dna: string): string {
  let rna: string[] = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'G') rna.push('C');
    else if (dna[i] === 'C') rna.push('G');
    else if (dna[i] === 'T') rna.push('A');
    else if (dna[i] === 'A') rna.push('U');
  }
  if (dna.length !== rna.length) throw Error('Invalid input DNA.')
  return rna.join('');
}
