let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-header__menubar');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})