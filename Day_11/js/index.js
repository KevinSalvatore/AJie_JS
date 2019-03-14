// const divNode = document.createElement('div');
// divNode.id = 'box0';
// const pNode = document.createElement('p');
// pNode.className = 'title'
// const textNode = document.createTextNode('未登录');
// pNode.appendChild(textNode);
// divNode.appendChild(pNode);
// document.body.appendChild(divNode);

// const link = document.getElementById("link");
// link.addEventListener("click", event => {
//   event.preventDefault();
// });

const tableBody = document.getElementById("tableBody");
const form = document.getElementById("form");
const nameInput = form.nameInput;
const ageInput = form.ageInput;
const sexOption = form.sexOption;
const dogOption = form.dogOption;
const insertNode = info => {
  const tr = document.createElement("tr");
  const keys = Object.keys(info);
  keys.forEach(key => {
    let td = document.createElement("td");
    const text = document.createTextNode(info[key]);
    td.appendChild(text);
    tr.appendChild(td);
  });
  tableBody.appendChild(tr);
};
form.addEventListener("submit", event => {
  event.preventDefault();
  let name = nameInput.value;
  let age = ageInput.value;
  let sex = null,
    dog = null;
  sexOption.forEach(element => {
    if (element.checked) {
      sex = element.value;
    }
  });
  dogOption.forEach(element => {
    if (element.checked) {
      dog = element.value;
    }
  });
  insertNode({
    name: name,
    age: age,
    sex: sex,
    dog: dog
  });
});
