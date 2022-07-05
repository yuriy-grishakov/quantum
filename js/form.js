// inputMask

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function(){
	console.log(selector2.value)


	const re = /^\d*(\.\d+)?$/

	console.log(selector2.value.match(/[0-9]/g).length)


	console.log(selector2.value.replace(/[0-9]/g, "0"));
});


// validate

let validateForms = function(selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		colorWrong: '#FF0100',
		
		messages: {
			first_name: {
				minLength: 'Введите правильное имя',
				required: 'Пожалуйста, заполните это поле',
			},
			email: {
				minLength: 'Введите правильный E-mail',
			 	required: 'Пожалуйста, заполните это поле',
			},
			tel: 'Пожалуйста, заполните это поле',
		},
		
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();
		}
	});
}

validateForms('.ordering-form', { email: { required: true, email: true }, first_name: { required: true }, tel: { required: true } });
