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
  if (inputEmoji.children[0].classList.contains("ion-md-code-working")) {
    inputEmojiClick();
    toolsHide();
  }
  inputWaySelectBtnClick();
});
inputEmoji.addEventListener("click", () => {
  inputEmojiClick();
  if (chatInputBox[0].classList.contains("page-show")) {
    inputWaySelectBtnClick();
  }
  if (inputEmoji.children[0].classList.contains("ion-md-code-working")) {
    toolsPop();
  } else {
    toolsHide();
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
let hasContentFlag = true;
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
  if (chatInputBox[1].hasChildNodes() === hasContentFlag) {
    changeSendBtn();
    hasContentFlag = !hasContentFlag;
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
    element.style.backgroundColor = "rgb(222, 222, 222)";
  });
  element.addEventListener("mouseup", () => {
    element.style.backgroundColor = "transparent";
  });
  element.addEventListener("touchstart", () => {
    element.style.backgroundColor = "rgb(222, 222, 222)";
  });
  element.addEventListener("touchend", () => {
    element.style.backgroundColor = "transparent";
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
      let path =
        "./svg/" +
        emojiObj.name +
        "/" +
        emojiObj.name +
        " (" +
        pointer++ +
        ").svg";
      let img = document.createElement("img");
      img.setAttribute("src", path);
      if (emojiObj.big) {
        img.classList.add("large");
      } else {
        img.classList.add("small");
      }
      let divContainer = document.createElement("div");
      divContainer.appendChild(img);
      img.addEventListener("click", () => {
        if (emojiObj.big) {
          message(true, false, img.outerHTML);
          scrollBtnChatPage();
        } else {
          chatInputBox[1].focus();
          insertHtmlAtCaret(img.outerHTML);
        }
      });
      let cell = document.createElement("div");
      cell.classList.add(cellType);
      cell.appendChild(divContainer);
      emojiSwiperSlide.appendChild(cell);
    }
    if (!emojiObj.big) {
      let img = document.createElement("img");
      img.setAttribute("src", "./svg/tool-icon/tool-icon_backspace.svg");
      img.classList.add("small");
      let divContainer = document.createElement("div");
      divContainer.appendChild(img);
      img.addEventListener("click",()=>{
        deleteElement();
      });
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
  let img = document.createElement("img");
  img.setAttribute("src", "./svg/tool-icon/tool-icon_" + name + ".svg");
  img.classList.add("small");
  let div = document.createElement("div");
  div.appendChild(img);
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
let emojiPageChooseBar = document.querySelectorAll("#emoji-page-choose > div");
for (let i = 0; i < emojiPageChooseBar.length; i++) {
  const element = emojiPageChooseBar[i];
  element.onclick = () => {
    swiperH.slideTo(i, 1000, false);
  };
}
/**
 * 添加表情点击效果
 */
let allEmoji = document.querySelectorAll(
  ".face-cell > div, .emoji-cell > div,#emoji-page-choose > div"
);
allEmoji.forEach(element => {
  borderEffect(element);
});

/**
 * 在光标处插入节点
 */
function insertHtmlAtCaret(html) {
  let sel, range;
  sel = window.getSelection();
  if (sel.getRangeAt && sel.rangeCount) {
    range = sel.getRangeAt(0);
    range.deleteContents();
    let el = document.createElement("div");
    el.innerHTML = html;
    let frag = document.createDocumentFragment(),
      node,
      lastNode;
    while ((node = el.firstChild)) {
      lastNode = frag.appendChild(node);
    }
    range.insertNode(frag);
    if (lastNode) {
      range = range.cloneRange();
      range.setStartAfter(lastNode);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
}

/**
 * 发送按钮样式变化
 */
let firstTimeAdd = true;
let sendToolBar = document.getElementById("send-tool-bar");
function changeSendBtn() {
  for (let i = 0; i < sendToolBar.children.length; i++) {
    const element = sendToolBar.children[i];
    element.classList.toggle("displayNone");
    if (
      !sendToolBar.children[0].classList.contains("displayNone") &&
      firstTimeAdd
    ) {
      sendToolBar.children[0].addEventListener("click", () => {
        message(false, false, chatInputBox[1].innerHTML);
        scrollBtnChatPage();
        chatInputBox[1].innerHTML = null;
      });
      firstTimeAdd = !firstTimeAdd;
    }
  }
}
/**
 * 发送消息功能函数
 */
var chatContainer = document.querySelector(".chat-container");

/**
 * @method message
 * @function 根据内容创建聊天对话
 * @param {boolean} isBigEmoji
 * @param {boolean} type true:sender false:reciver
 * @param {String} content
 */
function message(isBigEmoji, type, content) {
  let messageContainer = document.createElement("div");
  let role = type ? "chat-sender" : "chat-reciver";
  messageContainer.classList.add("chat-message", role);
  let profilePic = document.createElement("div");
  profilePic.classList.add("profile-pic");
  let messageContent = document.createElement("div");
  if (isBigEmoji) {
    messageContent.classList.add("bigEmoji");
  } else {
    messageContent.classList.add("message-content");
  }
  messageContent.innerHTML = content;
  let empty = document.createElement("div");
  empty.classList.add("empty");
  messageContainer.appendChild(profilePic);
  messageContainer.appendChild(messageContent);
  messageContainer.appendChild(empty);
  chatContainer.appendChild(messageContainer);
}
/**
 * 获取焦点并且定位到最后
 * 第一次进入聊天页面使用
 */
function placeCaretAtEnd(Node) {
  Node.focus();
  var range = document.createRange();
  range.selectNodeContents(Node);
  range.collapse(false);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}
/**
 * 回退功能的实现
 */
function deleteElement() {
  let sel, range;
  sel = window.getSelection();
  if (sel.getRangeAt && sel.rangeCount) {
    range = sel.getRangeAt(0);
    if (range.collapsed) {
      //判断光标是否在第一位
      if (range.startOffset === 0) return;
      else {
        //如果不在，将光标向前移动一位，document.execCommand("forwardDelete",false,null)
        range.setStart(range.startContainer, range.startOffset-1);
        range.collapse(true);
        document.execCommand("forwardDelete",false,null);
        return;
      }
    } else {
      //存在拖蓝，删除选中内容
      range.deleteContents();
      return;
    }
  }
  return;
}
/**
 * tool组件弹出功能
 */
let chatTabbar = document.querySelector("#chat-page .weui-tabbar");
let toolHeight = 256;
function toolsPop() {
  panelPadding += toolHeight;
  chatPage.style.paddingBottom = panelPadding + "px";
  chatTabbar.style.bottom = toolHeight + "px";
}
/**
 * tool组件隐藏功能
 */
function toolsHide() {
  panelPadding -= toolHeight;
  chatPage.style.paddingBottom = panelPadding + "px";
  chatTabbar.style.bottom = 0;
}
