'use strict';

$(document).ready(function() {
	var $nameInput = $('#nameInput');
	var $nameError = $('#nameError');
	var $emailInput = $('#emailInput');
	var $emailError = $('#emailError');
	var $websiteInput = $('#websiteInput');
	var $websiteError = $('#websiteError');
	var $messageInput = $('#messageInput');
	var $messageError = $('#messageError');
	var $button = $('#button');
	var $form = $('form');
	var $success = $('.success')
	

$button.on('click', function(e) {
	e.preventDefault();
	var name = $nameInput.val();
	var email = $emailInput.val();
	var website = $websiteInput.val();
	var message = $messageInput.val();
	var hasError = false;
	console.log(message);

	if(name === ''){
		hasError = true;
		$nameError.text('Name cannot be empty')
	}
	
	if (email.indexOf('@') === -1) {
		hasError = true;
		$emailError.text('Email must contain "@" symbol')
	}
	
	if (website.indexOf('http://') === -1) {
		hasError = true;
		$websiteError.text('Website must start with http://')
	}
	if(message === ''){
		hasError = true;
		$messageError.text('Message cannot be empty');
	}
	if (!hasError){
		$form.css({display: 'none'})
		$success.css({display: 'block'})
		$success.html('Thanks for contacting us, '+name+'. We have recieved your message and will be contacting you shortly.');
	}
})

});




