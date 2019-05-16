function showFilters() {
	//Make sure .hidden listed after .flex in CSS
	const filterMenu = document.querySelector("#filtermenu");
	filterMenu.addEventListener("click", function() {
		const filterList = document.getElementById("filters").classList.toggle("flex");
		const arrow = document.getElementById("arrow");
		(arrow.textContent === "↓") ? arrow.textContent = "↑" : arrow.textContent = "↓";
	});
}
showFilters();

//Returns an element with specified class
function hasClass(elem, className) {
    return elem.classList.contains(className);
}

//Shows filter options based on which toggle was selected.
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

function selected() {
	document.querySelector("#filters").addEventListener("click", function(e) {
		let items = document.querySelector("#filters").querySelectorAll("li");
		//Grabs current iteration of loop (val)
		//Add the .selection class to each li under #filters
		items.forEach(function(val) {
			val.classList.add("selection");
		});
		//Get the clicked li's parent's ID & toggle appropriate class
		if (hasClass(e.target, "selection")) {
			let parent = e.target.parentNode.id;
			switch (parent) {
				case "sizeList":
					e.target.classList.toggle("clickedSize");
					break;
				case "priceList":
					e.target.classList.toggle("clickedPrice");
					break;
				case "colorList":
					e.target.classList.toggle("clickedColor");
					break;
				default:
					break;
			}
		}
	});
}
selected();