function myFunction(num) {
  let a = "";
  for (let i = 1; i <= num; i++) {
    a += i;
  }
  while (num > 1) {
    // if (num !== 1) {
    // }
    a += num - 1;
    num--;
  }
  console.log(a)
}
myFunction(3);
// myFunction(8);
