function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("navigation").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
const menu=document.querySelector("#menu");
menu.addEventListener("click",function(){
	onClickMenu();
});