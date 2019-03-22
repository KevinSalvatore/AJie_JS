var text = document.getElementById('text');
text.addEventListener('click', function() {
  alert(this.textContent);
});
var main = document.getElementById('main');
var rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
rect.setAttribute("width", 100);
rect.setAttribute("height", 30);
rect.setAttribute("style", "fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)");
main.appendChild(rect);
