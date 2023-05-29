// differnce b/t fnd and filter
let arr = [1, 2, 34, 56, 78, 97, 2, 65, 454, 76];
let findVal1 = arr.filter((i) => i === 2);
let findVal2 = arr.find((i) => i === 2);
console.log(findVal1, findVal2);
