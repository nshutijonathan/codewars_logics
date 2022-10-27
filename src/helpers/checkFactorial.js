export const checkFactorial = (n) => {
  let result = 1;
  if (n === 0) {
    return 1;
  } else if (n < 0 || n > 12) {
    return " RangeError ";
  } else {
    for (let i = n; i >= 1; i--) {
      result *= i;
    }
  }
  return result;
};
