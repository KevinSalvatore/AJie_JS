let container = document.querySelector(".container");
let sender = document.querySelector("#sender");
let reciver = document.querySelector("#reciver");
let content = document.querySelector("#content");

let range = document.createRange();

range.setStartAfter(sender);

range.setEndAfter(reciver);

console.log(range);
range.deleteContents();
