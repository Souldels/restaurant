$(document).ready(function () {
	$("#modal__form").submit(function (event) {
		event.preventDefault();

		let result = $('.result');

		$.ajax({
			type: "POST",
			url: "https://reqres.in/api/users",
			dataType: 'html',
			data: $("#modal__form").serialize(),
			success: function () {

				result.addClass('success');
				result.html('<p class="result__msg">Thank you! Your booking will be submitted soon</p>')

				setTimeout(() => {
					$("#modal__form").trigger('reset');
				}, 1000)
			},
			error: function () {
				result.addClass('error');
				result.html('<p class="result__msg">Ooopps! Something went wrong...</p>')
			}
		});
	});
});