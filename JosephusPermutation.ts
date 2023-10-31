export const josephus = <T>(items: T[], k: number): T[] => {
  let count = 1;
  let index = 0;
  const result: T[] = [];
  while (items.length > 0) {
    if (count === k) {
      result.push(items.splice(index, 1)[0]);
      count = 1;
    } else {
      count++;
      index++;
    }
    if (index === items.length) {
      index = 0;
    }
  }
  return result;
};

josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
