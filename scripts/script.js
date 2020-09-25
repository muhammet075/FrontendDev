// JavaScript Document

var hamburgermenu = document.querySelector(".hamburger-menu");
var checkbox = document.querySelector("#schakel");
var sluiten = document.querySelector(".menu-sluiten");

checkbox.addEventListener("click", openHamburgermenu);


function openHamburgermenu() {

	if (checkbox.checked == true) {

		console.log("test");
		hamburgermenu.classList.remove("displaynone");


	} else {

		hamburgermenu.classList.add("displaynone");

	};

};


sluiten.addEventListener("click", sluitHamburgermenu);

function sluitHamburgermenu() {
	hamburgermenu.classList.add("displaynone");
}
