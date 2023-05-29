let no = 1234;
let s = 0;
let count = no.toString();

while (no != 0) {
  f = no % 10;
  no = Math.floor(no / 10);
  s += f ** count.length;
  // console.log(no, "==>");
}
console.log("It is armstrong no of : - ", s);
