
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
      loop: true,
    });


// products image slider

var productThumb = new Swiper('.small-image', {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		481:{
			spaceBetween: 10,
		}
	}
});
var productBig = new Swiper('.big-image',{
	loop: true,
	autoHeight: true,
	navigation: {
		nexEl: '.swiper-button-next',
		preEl: '.swiper-button-prev',
	},
	thumbs:{
		swiper: productThumb,
	}
})
// submenu
const submenu = document.querySelector('.submenu');
const submenu2 = document.querySelector('.submenu2');
const submenu3 = document.querySelector('.submenu3');
const submenu4 = document.querySelector('.submenu4');

const submenuContent = document.querySelector('.has-child-content');
const submenuContent2 = document.querySelector('.has-child-content2');
const submenuContent3 = document.querySelector('.has-child-content3');
const submenuContent4 = document.querySelector('.has-child-content4');

submenu.onclick = function(e){
	submenuContent.classList.toggle("active");
}
submenu2.onclick = function(e){
	submenuContent2.classList.toggle("active");
}
submenu3.onclick = function(e){
	submenuContent3.classList.toggle("active");
}
submenu4.onclick = function(e){
	submenuContent4.classList.toggle("active");
}
