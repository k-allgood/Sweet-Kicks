function showFilters() {
	//Make sure .hidden listed after .flexy in CSS
	const filterList = document.getElementById("filters").classList.toggle("flex");
	const arrow = document.getElementById("arrow");
	(arrow.textContent === "↓") ? arrow.textContent = "↑" : arrow.textContent = "↓";
}

function showSizes() {
	const sizeList = document.getElementById("sizeDiv").classList.toggle("sizes");
	let span = document.getElementById("openSizes");
	(span.textContent === "+") ? span.textContent = "-" : span.textContent = "+";
}

const filterMenu = document.querySelector("#filtermenu");
filterMenu.addEventListener("click", function() {
	showFilters();
});

const openSizes = document.querySelector("#openSizes");
openSizes.addEventListener("click", function() {
	showSizes();
});