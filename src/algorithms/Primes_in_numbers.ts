// Given a positive number n > 1 find the prime factor
// decomposition of n. The result will be a string
// with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

export const primeFactors = (n: number): string => {
  let factors: Map<number, any> = new Map<number, any>();
  let divisor = 2;
  let res = '';

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.has(divisor)
        ? factors.set(divisor, factors.get(divisor) + 1)
        : factors.set(divisor, 1);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  for (let [key, value] of factors) {
    value > 1 ? (res += `(${key}**${value})`) : (res += `(${key})`);
  }

  return res;
};
