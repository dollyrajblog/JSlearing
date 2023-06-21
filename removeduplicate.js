let arr = [1, 2, 3, 2, 1, 4, 34, 2, 323, 3];
// first way
const arr1 = arr.filter((item, index) => {
  //   console.log(arr.indexOf(item), index);
  return arr.indexOf(item) === index;
});
console.log(arr1);
// second way
console.log([...new Set(arr)]);
// third way
let newarr = [];
arr.forEach((element, index) => {
  //   if (!newarr.includes(element)) {
  //     newarr.push(element);
  //   }
  if (arr.indexOf(element) === index) {
    newarr.push(element);
  }
});
console.log(newarr);
// four way
let arr3 = [];
for (i = 0; i < arr.length; i++) {
  if (arr3.indexOf(arr[i]) === -1) {
    arr3.push(arr[i]);
  }
}
console.log(arr3);
