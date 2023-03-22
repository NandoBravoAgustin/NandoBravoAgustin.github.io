const d = document;
	let searchBtn = d.getElementById('searchBtn');
	let closeBtn = d.getElementById('closeBtn');
	let cartBtn = d.getElementById('cartBtn');
	let searchBox = d.getElementById('searchBox');
	let divMenuToggle = d.getElementById('div-menuToggle');
	let menuToggle = d.getElementById('menuToggle');
	let categorias = d.getElementById('div-categorias');

	let nav = d.getElementById('navigation');

	searchBtn.onclick = function(){
		searchBox.classList.add('active');
		closeBtn.classList.add('active');
		searchBtn.classList.add('active');
		divMenuToggle.classList.remove('active');
		cartBtn.classList.add('disabled');
		categorias.classList.add('active');
	}
	closeBtn.onclick = function(){
		searchBox.classList.remove('active');
		closeBtn.classList.remove('active');
		searchBtn.classList.remove('active');
		divMenuToggle.classList.add('active');
		cartBtn.classList.remove('disabled');
		categorias.classList.remove('active');
	}
	divMenuToggle.onclick = function(){
		nav.classList.toggle("active");
		menuToggle.classList.toggle("active");
	}



const submenu5 = document.querySelector('.submenu5');



const filter = d.querySelector('.content');
const contentFilter = d.querySelector('.content');
const productsShop = d.getElementById('products-shop');

