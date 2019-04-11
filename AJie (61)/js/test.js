var obj = {
  name: "kevin",
  age: 22,
  gender: "male"
}

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    const element = obj[key];
    console.log(element);
  }
}

console.log(obj["name"]);
console.log(obj.name);
