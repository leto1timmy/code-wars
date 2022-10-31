// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes
// the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

export function findOutlier(integers: number[]): number {
  let res = 0;
  for (let i = 1; i < integers.length; i++) {
    let prev = integers[i - 1];
    let curr = integers[i];
    let next = integers[i + 1];

    if (prev % 2 == 0 && curr % 2 == 0 && next % 2 == 0) {
      continue;
    } else if (prev % 2 != 0 && curr % 2 == 0 && next % 2 == 0) {
      res = prev;
      break;
    } else if (prev % 2 == 0 && curr % 2 != 0 && next % 2 == 0) {
      res = curr;
      break;
    } else if (prev % 2 == 0 && curr % 2 == 0 && next % 2 != 0) {
      res = next;
      break;
    } else if (prev % 2 != 0 && curr % 2 == 0 && next % 2 != 0) {
      res = curr;
      break;
    } else if (prev % 2 == 0 && curr % 2 != 0 && next % 2 != 0) {
      res = prev;
      break;
    }
  }

  return res;
}
