export function isValidWalk(walk: string[]) {
  if (walk.length === 0) return true;
  if (walk.length !== 10) return false;
  return walkReducesToZero(walk);
}

const walkReducesToZero = (walk: string[]): boolean => {
  const result = walk.reduce(
    (acc, curr) => {
      switch (curr) {
        case "n":
          acc.ns++;
          break;
        case "s":
          acc.ns--;
          break;
        case "w":
          acc.we++;
          break;
        case "e":
          acc.we--;
          break;
      }
      return acc;
    },
    { ns: 0, we: 0 }
  );

  return result.ns === 0 && result.we === 0;
};
