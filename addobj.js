const arr = [
  { id: 1, num: 2 },
  { id: 2, num: 1 },
  { id: 3, num: 4 },
  { id: 2, num: 5 },
  { id: 2, num: 15 },
  { id: 1, num: 3 },
];
let arr1 = arr.filter((item, index) => {
  // if(item.id==)
  for (i = index + 1; i < arr.length; i++) {
    if (arr[i].id === item.id) {
      //   console.log(arr[i], arr[i].id, item.id, "==>");
      item.num += arr[i].num;
      
    }
    return item;
  }
});

console.log(arr1);
