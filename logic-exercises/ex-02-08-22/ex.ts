export const findMissingNumber = (arr: number[]): number => {
    const expectedSum = 5050;
    const sum = arr.reduce((a, b) => a + b, 0)
    return expectedSum - sum;
  };