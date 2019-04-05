// let generateHashtag = string =>
//   string.length <= 140 &&
//   string.length > 0 &&
//   "#" +
//     string
//       .split(" ")
//       .map(e => e.charAt(0).toUpperCase() + e.slice(1))
//       .join(" ");
// console.log(generateHashtag("hello world"));
// console.log(generateHashtag(""));

let lou = n => {
  if (n < 0) return 0;
  else if (n === 1) return 1;
  else if (n === 2) return 2;
  else return lou(n - 1) + lou(n - 2);
};

console.log(lou(3));
