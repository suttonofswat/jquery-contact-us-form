(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
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
	var $success = $('.success');

	$button.on('click', function (e) {
		e.preventDefault();
		var name = $nameInput.val();
		var email = $emailInput.val();
		var website = $websiteInput.val();
		var message = $messageInput.val();
		var hasError = false;
		console.log(message);

		if (name === '') {
			hasError = true;
			$nameError.text('Name cannot be empty');
		}

		if (email.indexOf('@') === -1) {
			hasError = true;
			$emailError.text('Email must contain "@" symbol');
		}

		if (website.indexOf('http://') === -1) {
			hasError = true;
			$websiteError.text('Website must start with http://');
		}
		if (message === '') {
			hasError = true;
			$messageError.text('Message cannot be empty');
		}
		if (!hasError) {
			$form.css({ display: 'none' });
			$success.css({ display: 'block' });
			$success.html('Thanks for contacting us, ' + name + '. We have recieved your message and will be contacting you shortly.');
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map