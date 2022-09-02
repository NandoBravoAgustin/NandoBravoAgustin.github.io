window.addEventListener("scroll", function() {
	var header = document.querySelector("#header");
	header.classList.toggle("sticky", window.scrollY > 654);
	menuToggle.classList.toggle("black", window.scrollY > 654);

})
const menuToggle = document.querySelector(".menuToggle");
const menu = document.querySelector(".menu")
menuToggle.onclick = function() {
	menuToggle.classList.toggle("active");
}
	