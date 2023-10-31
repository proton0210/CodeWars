function nbMonths(
  startPriceOld: number,
  startPriceNew: number,
  savingPerMonth: number,
  percentLossByMonth: number
): [number, number] {
  let months = 0;
  let savings = 0;
  let currentPriceOld = startPriceOld;
  let currentPriceNew = startPriceNew;

  while (currentPriceOld + savings < currentPriceNew) {
    months++;
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }

    currentPriceOld *= 1 - percentLossByMonth / 100;
    currentPriceNew *= 1 - percentLossByMonth / 100;
    savings += savingPerMonth;
  }

  return [months, Math.round(currentPriceOld + savings - currentPriceNew)];
}

// Test
const result = nbMonths(2000, 8000, 1000, 1.5);
console.log(result); // Expected output: [6, 766]
