var friendsButton = document.querySelectorAll(".friends__button");
var friendsModal = document.querySelector(".friends-modal");
var friendsModalButton = document.querySelector(".friends-modal__button");

for (var i = 0; i < friendsButton.length; i++) {

	friendsButton[i].addEventListener("click", function (evt) {
	    evt.preventDefault();

	    friendsModal.classList.add("friends-modal--open");
	});
}

friendsModalButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    friendsModal.classList.remove("friends-modal--open");
});