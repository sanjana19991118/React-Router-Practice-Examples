let arr = ["hello", "world", "java", "hello", "java"];

function countWord(p) {
  let result = p.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  
  return result;
}

console.log(countWord(arr));
