export function findUniqOG(arr: string[]): string {
  let newArr = arr.map((a) => [...new Set(a.toLowerCase())].sort().join(""));
  console.log({ newArr });
  return arr.find((str, i) => {
    console.log(newArr.indexOf(newArr[i]), newArr.lastIndexOf(newArr[i]));
    return newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]);
  })!;
}

export function findUniq(arr: string[]): string {
  let newArr = arr.map((a) => {
    console.log("Original string:", a);

    const lowercaseStr = a.toLowerCase();
    console.log("Lowercase string:", lowercaseStr);

    const uniqueChars = [...new Set(lowercaseStr)];
    console.log("Unique characters:", uniqueChars);

    const sortedChars = uniqueChars.sort();
    console.log("Sorted characters:", sortedChars);

    const transformedStr = sortedChars.join("");
    console.log("Transformed string:", transformedStr);

    return transformedStr;
  });

  console.log({ newArr });

  return arr.find((str, i) => {
    console.log(newArr[i]);
    console.log(newArr.indexOf(newArr[i]), newArr.lastIndexOf(newArr[i]));
    return newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]);
  })!;
}
console.log(findUniq(["silvia", "vasili", "victor"]));
