try {
  console.log(name);
} catch (err) {
  console.log("===>", err);
}
// === try catch work synchronously.
setTimeout(() => {
  try {
    console.log(name);
  } catch(err) {
    console.log("===",err);// use it to handle asynchronously.
  }
}, 100);
console.log("i am indian");
