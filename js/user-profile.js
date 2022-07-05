// edit data


// ——— Личные данные
const editUser = document.getElementById('edit_user');
const cancelUser = document.getElementById('cancel_user');
const btnUser = document.getElementById('btn_user')
// Выбираем инпуты
const inputsUser =  document.getElementById('form_user').getElementsByClassName('element__input');
const inputsUserArray = Array.from(inputsUser);
// Выбираем бирки
const tagsUser =  document.getElementById('form_user').getElementsByClassName('element__tag');
const tagsUserArray = Array.from(tagsUser);

editUser.addEventListener('click', function(){
	inputsUserArray[0].classList.add('show');
	inputsUserArray[1].classList.add('show');
	inputsUserArray[2].classList.add('show');

	tagsUserArray[0].classList.remove('show');
	tagsUserArray[1].classList.remove('show');
	tagsUserArray[2].classList.remove('show');

	btnUser.classList.add('show');

	editUser.classList.remove('show');
	cancelUser.classList.add('show');
});

cancelUser.addEventListener('click', function(){
	inputsUserArray[0].classList.remove('show');
	inputsUserArray[1].classList.remove('show');
	inputsUserArray[2].classList.remove('show');

	tagsUserArray[0].classList.add('show');
	tagsUserArray[1].classList.add('show');
	tagsUserArray[2].classList.add('show');

	btnUser.classList.remove('show');

	editUser.classList.add('show');
	cancelUser.classList.remove('show');
});


// ——— Контакты
const editContact = document.getElementById('edit_contact');
const cancelContact = document.getElementById('cancel_contact');
const btnContact = document.getElementById('btn_contact')
// Выбираем инпуты
const inputsContact =  document.getElementById('form_contact').getElementsByClassName('element__input');
const inputsContactArray = Array.from(inputsContact);
// Выбираем бирки
const tagsContact =  document.getElementById('form_contact').getElementsByClassName('element__tag');
const tagsContactArray = Array.from(tagsContact);

editContact.addEventListener('click', function(){
	inputsContactArray[0].classList.add('show');
	inputsContactArray[1].classList.add('show');

	tagsContactArray[0].classList.remove('show');
	tagsContactArray[1].classList.remove('show');

	btnContact.classList.add('show');

	editContact.classList.remove('show');
	cancelContact.classList.add('show');
});

cancelContact.addEventListener('click', function(){
	inputsContactArray[0].classList.remove('show');
	inputsContactArray[1].classList.remove('show');

	tagsContactArray[0].classList.add('show');
	tagsContactArray[1].classList.add('show');

	btnContact.classList.remove('show');

	editContact.classList.add('show');
	cancelContact.classList.remove('show');
});


// ——— Адрес доставки
const editDelivery = document.getElementById('edit_delivery');
const cancelDelivery = document.getElementById('cancel_delivery');
const btnDelivery = document.getElementById('btn_delivery')
// Выбираем инпуты
const inputsDelivery =  document.getElementById('form_delivery').getElementsByClassName('element__input');
const inputsDeliveryArray = Array.from(inputsDelivery);
// Выбираем бирки
const tagsDelivery =  document.getElementById('form_delivery').getElementsByClassName('element__tag');
const tagsDeliveryArray = Array.from(tagsDelivery);

editDelivery.addEventListener('click', function(){
	inputsDeliveryArray[0].classList.add('show');

	tagsDeliveryArray[0].classList.remove('show');

	btnDelivery.classList.add('show');

	editDelivery.classList.remove('show');
	cancelDelivery.classList.add('show');
});

cancelDelivery.addEventListener('click', function(){
	inputsDeliveryArray[0].classList.remove('show');

	tagsDeliveryArray[0].classList.add('show');

	btnDelivery.classList.remove('show');

	editDelivery.classList.add('show');
	cancelDelivery.classList.remove('show');
});



// ——— Логин
const editLogin = document.getElementById('edit_login');
const cancelLogin = document.getElementById('cancel_login');
const btnLogin = document.getElementById('btn_login')
// Выбираем инпуты
const inputsLogin = document.getElementById('form_login').getElementsByClassName('element__input');
const inputsLoginArray = Array.from(inputsLogin);
// Выбираем бирки
const tagsLogin = document.getElementById('form_login').getElementsByClassName('element__tag');
const tagsLoginArray = Array.from(tagsLogin);

editLogin.addEventListener('click', function(){
	inputsLoginArray[0].classList.add('show');
	inputsLoginArray[1].classList.add('show');

	tagsLoginArray[0].classList.remove('show');
	tagsLoginArray[1].classList.remove('show');

	btnLogin.classList.add('show');

	editLogin.classList.remove('show');
	cancelLogin.classList.add('show');
});

cancelLogin.addEventListener('click', function(){
	inputsLoginArray[0].classList.remove('show');
	inputsLoginArray[1].classList.remove('show');

	tagsLoginArray[0].classList.add('show');
	tagsLoginArray[1].classList.add('show');

	btnLogin.classList.remove('show');

	editLogin.classList.add('show');
	cancelLogin.classList.remove('show');
});








