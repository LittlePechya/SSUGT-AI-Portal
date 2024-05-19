document.addEventListener("DOMContentLoaded", function () {
	const userButton = document.querySelector("#userButton");
	const userMenu = document.querySelector("#userMenu");

	userButton.addEventListener("click", function () {
		userMenu.classList.toggle("show");
	});

	document.addEventListener("click", function (event) {
		const isClickInside = userButton.contains(event.target) || userMenu.contains(event.target);
		if (!isClickInside) {
			userMenu.classList.remove("show");
		}
	});
});
