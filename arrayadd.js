//input    Array: [1, 2, 3, 4]
//output   Sum: [1, 3, 6, 10]
// cumulative sum

let arr = [1, -2, 3, -4, 3];
let newarr = [];
for (let i in arr) {
  sum = 0;
  for (let j = 0; j <= i; j++) {
    sum += arr[j];
  }
  newarr.push(sum);
}
console.log("cumlative sum", newarr);
const positivesum = newarr.filter((item) => item > 0);
console.log("positive cumlative sum", positivesum);
