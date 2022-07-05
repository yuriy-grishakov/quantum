
const asideOpen = document.getElementById('aside-open');
const asideClose = document.getElementById('aside-close');
const aside = document.getElementById('aside-wrapper');

asideOpen.addEventListener('click', function(){

	asideOpen.classList.toggle('active');
	aside.classList.toggle('active');
});

asideClose.addEventListener('click', function(){

	asideOpen.classList.toggle('active');
	aside.classList.toggle('active');
});