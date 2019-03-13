for (let index = 0; index < document.body.childNodes.length; index++) {
    const element = document.body.childNodes[index];
    console.log(document.body.childNodes[index]);
}
console.log(document.body.childNodes[1].childNodes[0]);
const titleElement = document.getElementsByTagName("h2");
console.log(titleElement[titleElement.length-1]);
const existingElements = Array.from(document.getElementsByClassName("exists"));
console.log(existingElements.length);
existingElements.forEach(element => {
    console.log(element.innerHTML);
});
