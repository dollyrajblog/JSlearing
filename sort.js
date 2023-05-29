let arr = [1, 4, 5, 7, 9, 3, 2, 5, 6];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      // let temp = arr[i];
      // arr[i] = arr[j];  // using third variable
      // arr[j] = temp;
      [arr[i], arr[j]] = [arr[j], arr[i]];// destructure method
    }
  }
}
console.log(arr);
