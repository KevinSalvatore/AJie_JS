let mountains = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" }
];
const generateTableHead = table => {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    console.log(key);
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
};
const generateTable = (table, data) => {
  for (const element of data) {
    let row = table.insertRow();
    for (const key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
};

let table = document.querySelector("#mountains");
let data = Object.keys(mountains[0]);
generateTable(table, mountains);
generateTableHead(table, data);
