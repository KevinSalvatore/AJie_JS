/**
 * 换页功能
 */
const tabbars = document.querySelectorAll("#main-page .weui-tabbar__item");
const pages = document.querySelectorAll("#main-page .weui-tab__panel");
let tabName = document.querySelector("#main-page .tab-name>p");
let tabSearch = document.querySelector("#main-page .tab-search");
let tabMoreIcon = document.querySelector("#main-page .tab-more>i");
let tabHd = document.querySelector("#main-page .tab__hd");
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
/**
 * Contacts页面侧边栏制作
 */
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
  a.setAttribute("href", "#group-" + char.toUpperCase());
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
      toast.style.display = "none";
    }, 500);
  });
  contactsGroupTarget.appendChild(target);
});
/**
 * 通过contacts-group的id属性为weui-cells__title设置title
 */
let contactsGroups = document.querySelectorAll(".contacts-group");
let weuiCellsTitle = document.querySelectorAll(".weui-cells__title");
for (let index = 0; index < contactsGroups.length; index++) {
  const element = contactsGroups[index];
  let attribute = element.getAttribute("id");
  let title = attribute.charAt(attribute.length - 1);
  let titleNode = document.createTextNode(title);
  weuiCellsTitle[index].appendChild(titleNode);
}
/**
 * welcome界面控制
 */
let welcome = document.querySelector(".welcome");
setTimeout(() => {
  welcome.style.opacity = "0";
  disappear(welcome);
}, 2000);
let disappear = obj => {
  setTimeout(() => {
    obj.style.display = "none";
  }, 500);
};
/**
 *聊天界面始终保持在底部
 */
let chatPage = document.querySelector("#chat-page .weui-tab__panel");
let scrollBtnChatPage = () => {
  chatPage.scrollTop = chatPage.scrollHeight;
};
let chatInput = document.querySelectorAll(".chat-input");
chatInput.forEach(ele => {
  ele.addEventListener("focus", () => {
    scrollBtnChatPage();
  });
});
/**
 *语音按钮，表情包按钮
 *
 */
let inputWaySelectBtn = document.querySelector("#input-way-select");
let chatInputBox = document.querySelectorAll(".chat-input");
let messageInput;
let inputWaySelectBtnClick = () => {
  inputWaySelectBtn.children[0].classList.toggle("ion-md-mic");
  inputWaySelectBtn.children[0].classList.toggle("ion-md-code-working");
  if (chatInputBox[1].classList.contains("page-show")) {
    messageInput = chatInputBox[1].innerHTML;
    chatInputBox[1].innerHTML = "";
  }
  chatInputBox.forEach(ele => {
    ele.classList.toggle("page-show");
  });
  if (chatInputBox[1].classList.contains("page-show")) {
    chatInputBox[1].innerHTML = messageInput;
  }
};
let inputEmoji = document.querySelector("#input-emoji");
let inputEmojiClick = () => {
  inputEmoji.children[0].classList.toggle("ion-md-happy");
  inputEmoji.children[0].classList.toggle("ion-md-code-working");
};

inputWaySelectBtn.addEventListener("click", () => {
  inputWaySelectBtnClick();
  if (inputEmoji.children[0].classList.contains("ion-md-code-working")) {
    inputEmojiClick();
  }
});
inputEmoji.addEventListener("click", () => {
  if (inputEmoji.children[0].classList.contains("ion-md-happy")) {
    // 表情框跳出
  }
  inputEmojiClick();
  if (chatInputBox[0].classList.contains("page-show")) {
    inputWaySelectBtnClick();
  }
});
/**
 *语音按压
 */
chatInputBox[0].addEventListener("mousedown", () => {
  chatInputBox[0].style.backgroundColor = "rgb(222, 222, 222)";
});
chatInputBox[0].addEventListener("mouseup", () => {
  chatInputBox[0].style.backgroundColor = "#fff";
});
chatInputBox[0].addEventListener("touchstart", () => {
  chatInputBox[0].style.backgroundColor = "rgb(222, 222, 222)";
});
chatInputBox[0].addEventListener("touchend", () => {
  chatInputBox[0].style.backgroundColor = "#fff";
});
/**
 *通过检测输入框的高度，动态的改变panel的paddingBtm
 */
let heightBef = 40;
let heightAft = chatInputBox[1].offsetHeight;
let panelPadding = 50;
chatInputBox[1].addEventListener("DOMSubtreeModified", () => {
  heightAft = chatInputBox[1].offsetHeight;
  if (heightAft !== heightBef) {
    panelPadding += heightAft - heightBef;
    chatPage.style.paddingBottom = panelPadding + "px";
    scrollBtnChatPage();
    heightBef = heightAft;
  }
});
/**
 *
 */
var swiperH = new Swiper("#emoji-pages");
var swiperV = new Swiper(".emoji-table", {
  direction: "vertical"
});

/**
 *
 */
let emojiCells = document.querySelectorAll(".emoji-cell > div");
emojiCells.forEach(element => {
  element.addEventListener("mousedown", () => {
    element.style.backgroundColor = "rgb(222, 222, 222)";
  });
  element.addEventListener("mouseup", () => {
    element.style.backgroundColor = "rgb(247, 247, 247)";
  });
  element.addEventListener("touchstart", () => {
    element.style.backgroundColor = "rgb(222, 222, 222)";
  });
  element.addEventListener("touchend", () => {
    element.style.backgroundColor = "rgb(247, 247, 247)";
  });
});
