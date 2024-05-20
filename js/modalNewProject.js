document.addEventListener("DOMContentLoaded", () => {
	const addNewProjectButton = document.getElementById("addNewProject");
	const modal = document.getElementById("createProjectModal");
	const cancelButton = document.getElementById("cancelButton");
	const createProjectSubmit = document.getElementById("createProjectSubmit");
	const projectImageInput = document.getElementById("projectImage");
	const imagePreview = document.getElementById("imagePreview");

	addNewProjectButton.addEventListener("click", () => {
		modal.classList.add("modal--visible");
	});

	cancelButton.addEventListener("click", () => {
		modal.classList.remove("modal--visible");
	});

	createProjectSubmit.addEventListener("click", () => {
		modal.classList.remove("modal--visible");
	});

	projectImageInput.addEventListener("change", () => {
		const file = projectImageInput.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const img = new Image();
				img.src = reader.result;
				img.onload = () => {
					imagePreview.innerHTML = "";
					imagePreview.appendChild(img);
				};
			};
			reader.readAsDataURL(file);
		}
	});
});
