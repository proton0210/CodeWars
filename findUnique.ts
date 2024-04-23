export function findUniq(arr: string[]): string {
  let newArr = arr.map((a) => [...new Set(a.toLowerCase())].sort().join(""));
  console.log({ newArr });
  return arr.find((str, i) => {
    console.log(newArr.indexOf(newArr[i]), newArr.lastIndexOf(newArr[i]));
    return newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]);
  })!;
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
