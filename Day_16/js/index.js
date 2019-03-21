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
let chatInputBox = document.querySelectorAll(".chat-input");
chatInputBox.forEach(ele => {
  ele.addEventListener("focus", () => {
    scrollBtnChatPage();
  });
});
/**
 *语音按钮，表情包按钮
 *
 */
let inputWaySelectBtn = document.querySelector("#input-way-select");
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
 *创建表情包对象
 */
const bqb = [
  {
    name: "cuetEmoji",
    emojiAmount: 50,
    big: false
  },
  {
    name: "cartoon",
    emojiAmount: 30,
    big: true
  },
  {
    name: "location",
    emojiAmount: 28,
    big: true
  }
];
/**
 * 点击功能函数
 */
let borderEffect = element => {
  element.addEventListener("mousedown", () => {
    element.style.border = "1px solid rgb(64, 79, 125)";
  });
  element.addEventListener("mouseup", () => {
    element.style.border = "0";
  });
  element.addEventListener("touchstart", () => {
    element.style.border = "1px solid rgb(64, 79, 125)";
  });
  element.addEventListener("touchend", () => {
    element.style.border = "0";
  });
};
/**
 * 添加表情页面
 */
let createEmojiPages = emojiObj => {
  let containerAmount = emojiObj.big ? 8 : 20;
  let cellType = emojiObj.big ? "emoji-cell" : "face-cell";
  let pageAmount = Math.ceil(emojiObj.emojiAmount / containerAmount);
  let des = "#" + emojiObj.name + "-table .swiper-wrapper";
  let emojiWrapper = document.querySelector(des);
  let pointer = 1;
  for (let i = 0; i < pageAmount; i++) {
    let emojiSwiperSlide = document.createElement("div");
    emojiSwiperSlide.classList.add("swiper-slide");
    for (let i = 0; i < containerAmount; i++) {
      if (pointer > emojiObj.emojiAmount) break;
      let masking = document.createElement("div");
      masking.classList.add("masking");
      let path =
        "./svg/" +
        emojiObj.name +
        "/" +
        emojiObj.name +
        " (" +
        pointer++ +
        ").svg";
      let embed = document.createElement("embed");
      embed.setAttribute("src", path);
      embed.setAttribute("type", "image/svg+xml");
      let divContainer = document.createElement("div");
      divContainer.appendChild(masking);
      divContainer.appendChild(embed);
      if (!emojiObj.big) {
        masking.addEventListener("click", () => {
          let tmpNode = masking.nextSibling.cloneNode(true);
          chatInputBox[1].appendChild(tmpNode);
        });
      }
      let cell = document.createElement("div");
      cell.classList.add(cellType);
      cell.appendChild(divContainer);
      emojiSwiperSlide.appendChild(cell);
    }
    if (!emojiObj.big) {
      let masking = document.createElement("div");
      masking.classList.add("masking");
      let embed = document.createElement("embed");
      embed.setAttribute("src", "./svg/tool-icon/tool-icon_backspace.svg");
      embed.setAttribute("type", "image/svg+xml");
      let divContainer = document.createElement("div");
      divContainer.appendChild(masking);
      divContainer.appendChild(embed);
      let faceCell = document.createElement("div");
      faceCell.classList.add("face-cell");
      faceCell.appendChild(divContainer);
      emojiSwiperSlide.appendChild(faceCell);
    }
    emojiWrapper.appendChild(emojiSwiperSlide);
  }
};
/**
 * 创建表情选择Bar
 */
let createEmojiBar = name => {
  let maskingDiv = document.createElement("div");
  maskingDiv.classList.add("masking");
  let embed = document.createElement("embed");
  embed.setAttribute("src", "./svg/tool-icon/tool-icon_" + name + ".svg");
  embed.setAttribute("type", "image/svg+xml");
  let div = document.createElement("div");
  div.appendChild(maskingDiv);
  div.appendChild(embed);
  return div;
};
/**
 * 创建整个表情Div
 */
let createEmoji = emojiObjs => {
  let emojiPages = document.querySelector("#emoji-pages > .swiper-wrapper");
  let emojiPageChooseBar = document.querySelector("#emoji-page-choose");
  for (let i = 0; i < emojiObjs.length; i++) {
    const element = emojiObjs[i];
    let divSW = document.createElement("div");
    divSW.classList.add("swiper-wrapper");
    let divPageTable = document.createElement("div");
    divPageTable.setAttribute("id", element.name + "-table");
    divPageTable.classList.add("swiper-container", "emoji-table");
    divPageTable.appendChild(divSW);
    let divSS = document.createElement("div");
    divSS.classList.add("swiper-slide");
    divSS.appendChild(divPageTable);
    emojiPages.appendChild(divSS);
    createEmojiPages(element);
    emojiPageChooseBar.appendChild(createEmojiBar(element.name));
  }
};
//调用创建表情包
createEmoji(bqb);
/**
 *创建Swiper
 */
var swiperH = new Swiper("#emoji-pages");
var swiperV = new Swiper(".emoji-table", {
  direction: "vertical"
});
/**
 * 添加表情Bar点击跳转功能
 */
let emojiPageChooseBar = document.querySelectorAll(
  "#emoji-page-choose .masking"
);
for (let i = 0; i < emojiPageChooseBar.length; i++) {
  const element = emojiPageChooseBar[i];
  element.onclick = () => {
    swiperH.slideTo(i, 1000, false);
  };
}
/**
 * 添加表情点击效果
 */
let maskingDiv = document.querySelectorAll(".masking");
maskingDiv.forEach(element => {
  borderEffect(element);
});
