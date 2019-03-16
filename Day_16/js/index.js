const tabbars = document.querySelectorAll(".weui-tabbar__item");
const pages = document.querySelectorAll(".weui-tab__panel");
let tabName = document.querySelector(".tab-name>p");
let tabSearch = document.querySelector(".tab-search");
let tabMoreIcon = document.querySelector(".tab-more>i");
let tabHd = document.querySelector(".tab__hd");
for (let index = 0; index < tabbars.length; index++) {
  const obj = tabbars[index];
  obj.addEventListener("click", () => {
    tabbars.forEach(ele => {
      ele.classList.remove("weui-bar__item_on");
    });
    obj.classList.add("weui-bar__item_on");
    pages.forEach(e => {
      e.classList.remove("page-show");
    });
    pages[index].classList.add("page-show");
    switch (index) {
      case 0:
        tabName.textContent = "WeChat";
        break;
      case 1:
        tabName.textContent = "Contacts";
        break;
      case 2:
        tabName.textContent = "Discover";
        break;
      case 3:
        tabName.textContent = "";
        break;
      default:
        break;
    }
    if (index === 3) {
      tabSearch.style.display = "none";
      tabMoreIcon.classList.remove("ion-ios-add-circle-outline");
      tabMoreIcon.classList.add("ion-ios-camera");
      tabHd.style.backgroundColor = "#fff";
    } else {
      tabHd.style.backgroundColor = "#f7f7fa";
      tabMoreIcon.classList.remove("ion-ios-camera");
      tabMoreIcon.classList.add("ion-ios-add-circle-outline");
      tabSearch.style.display = "block";
    }
  });
}
let targets = "↑☆";
for (var i = 0; i < 26; i++) {
  targets += String.fromCharCode(65 + i);
}
targets += "#";

let contactsGroupTarget = document.querySelector(".contacts-group-target>ul");
let weuiToastContainer = document.querySelector(".weui-toast-container");
let toast = document.getElementById("toast");
Array.from(targets).forEach(char => {
  let text = document.createTextNode(char);
  let a = document.createElement("a");
  a.appendChild(text);
  a.setAttribute("href","#group-"+char.toUpperCase());
  let target = document.createElement("li");
  target.appendChild(a);
  target.addEventListener("click", () => {
    let text = target.firstChild.textContent;
    let textNode = document.createTextNode(text);
    if (weuiToastContainer.hasChildNodes())
      weuiToastContainer.replaceChild(textNode, weuiToastContainer.firstChild);
    weuiToastContainer.appendChild(textNode);
    toast.style.opacity = 1;
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.opacity = 0;
      toast.style.display = "nobe";
    }, 500);
  });
  contactsGroupTarget.appendChild(target);
});

let contactsGroups = document.querySelectorAll(".contacts-group");
let weuiCellsTitle = document.querySelectorAll(".weui-cells__title");
for (let index = 0; index < contactsGroups.length; index++) {
  const element = contactsGroups[index];
  let attribute = element.getAttribute("id");
  let title = attribute.charAt(attribute.length - 1);
  let titleNode = document.createTextNode(title);
  weuiCellsTitle[index].appendChild(titleNode);
}
