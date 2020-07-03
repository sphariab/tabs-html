(function() {
	//modal window logic
	var modal, addBtn, closeBtn, saveBtn;
	modal = document.getElementById("modal");
	addBtn = document.getElementsByClassName("add-block")[0];
	closeBtn = document.getElementsByClassName("modal__close-button")[0];
	saveBtn = document.getElementsByClassName("submit-btn")[0];

	function showModal(){
		modal.style.display = "block";
	}

	function hideModal(){
		modal.style.display = "none";
	}

	addBtn.addEventListener('click', showModal);
	closeBtn.addEventListener('click', hideModal);
	saveBtn.addEventListener('click', hideModal);
	window.addEventListener('click', function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});
})();
