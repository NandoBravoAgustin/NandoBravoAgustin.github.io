let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
	let desplazamiento = window.pageYOffset;
	if (ubicacionPrincipal >= desplazamiento) {
		document.getElementById('header').style.top =  "0";
		document.querySelector(".whatsapp").classList.add("active");
	} 
	else{
		document.getElementById("header").style.top = "-100px";
		document.querySelector(".whatsapp").classList.remove("active");

	}
	ubicacionPrincipal = desplazamiento;
}
const menu = document.querySelector(".menu")
menu.onclick = function () {
	menu.classList.toggle("activo")
}
window.addEventListener("scroll", function() {
	var header = document.querySelector("#header");
	header.classList.toggle("sticky", window.scrollY > 100);

})
const menuToggle = document.querySelector(".menuToggle");
	// window.addEventListener('load', function () {
	// 	console.log('el contenido ha cargado')
	// 	var imagenes = [];
	// 	imagenes[0] = 'img/hotelKurumi/HK1.jpg'
	// 	imagenes[1] = 'img/hotelNando/6.png'
	// 	imagenes[2] = 'img/hotelNando/5.png'

	// 	var indiceImagenes = 0;
	// 	function cambiarImagen() {
	// 		document.slider.style.transition
	// 		document.slider.src = imagenes[indiceImagenes];
	// 			if (indiceImagenes < 2) {
	// 				indiceImagenes++;
	// 			} else {
	// 				indiceImagenes = 0;
	// 			}
	// 	}
	// 	setInterval(cambiarImagen, 7000)
	// })

	// window.addEventListener('load', function () {
	// 	window.addEventListener('mousemove', function t() {
	// 		var imgKurumi = [];
	// 		imgKurumi[0] = 'img/hotelKurumi/HK1.jpg'
	// 		imgKurumi[1] = 'img/hotelKurumi/HK2.jpg'
	// 		imgKurumi[2] = 'img/hotelKurumi/HK3.jpg'

	// 		var indexImgKur = 0;
	// 		function cambiarKurumi() {
	// 			document.hotelKurumi.src = imgKurumi[indexImgKur];
	// 			if (indexImgKur < 2) {
	// 				indexImgKur++;
	// 			} else{
	// 				indexImgKur = 0;
	// 			}
	// 		}
	// 		setInterval(cambiarKurumi,2000)
				
	// 	})
		
	// })
			

// window.addEventListener('load',function () {
// 	var imgKurumi = [];
// 	imgKurumi[0] = 'img/hotelKurumi/HK1.jpg'
// 	imgKurumi[1] = 'img/hotelKurumi/HK3.jpg'

// 	var indexImgKur = 0;
// 	function changeKurumi(){
		
// 		document.hotelKurumi.src = imgKurumi[indexImgKur];
// 		if (indexImgKur < 1) {
// 			indexImgKur++;
// 		} else {
// 			indexImgKur = 0;
// 		}
// 	}
// 	setInterval(changeKurumi,2000)
// })

// document.querySelectorAll('.img-img').addEventListener('click',function (){
// 	alert("da")
// })
