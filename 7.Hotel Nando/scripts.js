const menu = document.querySelector(".menu");
const ulMenu = document.querySelector(".ul-menu")
const cerrar = document.querySelector(".cruz")
menu.onclick = function() {
	ulMenu.classList.add("activo")
}
cerrar.onclick = function(){
	ulMenu.classList.remove("activo")
}