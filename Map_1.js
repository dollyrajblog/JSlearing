const map1 = new Map();
map1.set("name", 25);
map1.set("name1", 25);
map1.set("name2", 25);
map1.set("name3", 25);
console.log(map1.get("name"));
console.log(map1.size);
map1.delete("name");
console.log(map1);
console.log(map1.entries());
console.log(map1.has("name1"));
const arr = [
  { id: 1, name: "react" },
  { id: 2, name: "reactnative" },
  { id: 3, name: "reactjs" },
];
arr.map((item) => {
  if (item.id === 2) {
    console.log(item);
  }
  console.log(item.id, item.name);
});
