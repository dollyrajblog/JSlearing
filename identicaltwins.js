// input [2,2,4,5,6,2,5]
// output 4
let arr = [2, 2, 4, 3, 4, 2];
let count = 0;
for (let i = 0; i < arr.length - 1; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count += 1;
    }
  }
}
console.log(count);
