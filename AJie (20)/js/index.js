let pathLength = document.querySelectorAll('path');
pathLength.forEach((item, index) => {
  let itemLength = Math.ceil(item.getTotalLength());
  console.log(itemLength);
});