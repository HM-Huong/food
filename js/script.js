const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
};

document.body.onscroll = () => {
	menu.classList.remove("fa-times");
	navbar.classList.remove("active");
};

document.querySelector("#search-icon").onclick = () => {
	document.querySelector("#search-form").classList.add("active");
};

document.querySelector("#close").onclick = () => {
	document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop:true
});
