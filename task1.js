let value = "india";
//  output  {i:2, n:1, d:1 , a:1}
let obj = {};
for (let i = 0; i < value.length; i++) {
  count = 0;
  for (let j = 0; j < value.length; j++) {
    if (value[i] === value[j]) {
      count += 1;
      value.slice(j, 1);
    }
  }
  obj[value[i]] = count;//add object key and value
}
console.log(obj);
