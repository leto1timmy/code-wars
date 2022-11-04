// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} }
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
// where all numbers are positive ints. You have to produce a result
// in the form:

// (N_1, D) ... (N_n, D)
// or
// [ [N_1, D] ... [N_n, D] ]
// or
// [ (N_1', D) , ... (N_n, D) ]
// or
// {{N_1, D} ... {N_n, D}}
// or
// "(N_1, D) ... (N_n, D)"

export const convertFrac = (lst: [number, number][]): string => {
  let res = '';
  let all = 0;
  let den = 1;

  while (all != lst.length) {
    all = 0;
    for (let i = 0; i < lst.length; i++) {
      if (den % lst[i][1] == 0) {
        all++;
      }
    }
    den++;
  }
  den--;
  lst.forEach((el) => {
    res += `(${(den / el[1]) * el[0]},${den})`;
  });

  return res;
};
