function writer() {
document.getElementById("heading-one").innerHTML = "Dynamic Content";
document.getElementById("paragraph-one").innerHTML = "any-text";

}

function changeColors() {
document,getElementById("heading-one").style.color="#f00";
document.body.style.backgroundColor="#333";
document.getElementById("wrapper").style.width = "80%";

}

window.onLoad=writer(),changeColors(); 