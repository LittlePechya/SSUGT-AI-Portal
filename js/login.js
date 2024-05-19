document.addEventListener("DOMContentLoaded", function () {
	const registerButton = document.getElementById("registerButton");
	const loginButton = document.getElementById("loginButton");
	const carousel = document.querySelector(".carousel");

	registerButton.addEventListener("click", function () {
		carousel.classList.add("show-register");
		carousel.classList.remove("show-login");
	});

	loginButton.addEventListener("click", function () {
		carousel.classList.add("show-login");
		carousel.classList.remove("show-register");
	});
});
