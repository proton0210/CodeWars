export function beeramid(bonus: number, price: number): number {
  const noOfBeerCans = Math.floor(bonus / price);
  let totalCans = 0;
  //   console.log(noOfBeerCans);
  let level = 0;

  while (true) {
    level++;
    let num = Math.pow(level, 2);
    totalCans += num;
    if (totalCans > noOfBeerCans) {
      level--;
      break;
    }
    // console.log({ num }, { level });
  }
  //   console.log({ level });
  return level;
}

beeramid(21, 1.5); // should === 2
