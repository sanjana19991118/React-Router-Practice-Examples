let people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];


function groupBy(ar) {
  var check = {};

  ar.forEach((item) => {
    if (!check[item.age]) {
      check[item.age] = [item];
    } else {
      check[item.age].push(item);
    }
  });
  return check;
}

console.log(groupBy(people));
