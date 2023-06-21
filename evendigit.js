let arr = [1, 23, 453, 212, 21, 3254, 32455, 3122, 455632];
const newarr = arr.filter((item) => {
  if(item.toString().length%2!==1){
    return item
  }
});
console.log(newarr)