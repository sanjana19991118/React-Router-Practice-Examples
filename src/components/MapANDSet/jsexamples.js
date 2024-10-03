const arr = [3,5,7];
arr.foo = 'bar';
for (let i in arr) {
  console.log(i);
}