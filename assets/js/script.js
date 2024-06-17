function pintar(color = 'green') {
    ele.style.backgroundColor = color;
}

var ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar('yellow');
});
    