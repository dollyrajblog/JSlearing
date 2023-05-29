const no = 343;
const strNo = "mam";
const arr = [1, 2, 1];
console.log(no.toString().split("").reverse().join(""));
console.log(strNo.split("").reverse().join(""));
console.log(arr.reverse().join(""));
if (strNo === strNo.split("").reverse().join("")) {
  console.log("it is palindrom no");
}
const strcno = Number(no.toString().split("").reverse().join(""));
if (no === strcno) {
  console.log("this is palindrom no");
}
const no1 =[2, 5,1,21,1];
console.log(no1.shift(2), no1);
