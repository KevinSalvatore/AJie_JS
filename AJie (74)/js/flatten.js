const _ = require("lodash");

const arr1 = [1, 2, 3, 4, [12, 23, 34], 5, 6, 7];
const arr2 = [2, 1, 2];
const users = [
  {
    user: "fred",
    age: 48
  },
  {
    user: "barney",
    age: 36
  },
  {
    user: "fred",
    age: 40
  },
  {
    user: "barney",
    age: 34
  }
];

const flattenArr1 = _.flatten(arr1);
console.log(flattenArr1);
console.log(_.uniq(arr2));
console.log(
  users.sort((user1, user2) => {
    return user1.age - user2.age;
  })
);
