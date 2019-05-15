function showFilters() {
	//Make sure .hidden listed after .flexy in CSS
	const filterList = document.getElementById("filters").classList.toggle("flex");
	const arrow = document.getElementById("arrow");
	(arrow.textContent === "↓") ? arrow.textContent = "↑" : arrow.textContent = "↓";
}

const filterMenu = document.querySelector("#filtermenu");
filterMenu.addEventListener("click", function() {
	showFilters();
});

function hasClass(elem, className) {
    return elem.classList.contains(className);
}

function openFilter() {
	document.querySelector("#filters").addEventListener("click", function (e) {
    if (hasClass(e.target, "toggle")) {
    	let toShow = e.target.parentNode.children[1];
    	toShow.classList.toggle("showFilter");
		(e.target.textContent === "+") ? e.target.textContent = "-" : e.target.textContent = "+";
    	}
	});
}
openFilter();
