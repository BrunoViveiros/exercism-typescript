const DNAToRNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export function toRna(dnaStrand: string) {
  return dnaStrand
    .split('')
    .map((nucleotides) => {
      const convertedValue = DNAToRNA[nucleotides as keyof typeof DNAToRNA];

      if (!convertedValue) throw new Error('Invalid input DNA.');

      return convertedValue;
    })
    .join('');
}
