var friendsSlide = document.querySelectorAll('.friends__item');
var friendsModal = document.querySelector(".friends-modal");

var friendsButton = document.querySelectorAll(".friends__button");
var friendsModalButton = friendsModal.querySelector(".friends-modal__button");

for (var i = 0; i < friendsButton.length; i++) {
	friendsButton[i].addEventListener("click", function (evt) {
	  evt.preventDefault();
	  var modalId = event.target.getAttribute('data-id');

	  var friendName = friendsSlide[modalId-1].querySelector('.friends__name').textContent
	  friendsModal.querySelector('.friends-modal__name').textContent = friendName;

	  var friendImgCollection = friendsSlide[modalId-1].getElementsByTagName('img');

	  var friendImgModalCollection = friendsModal.getElementsByTagName('img');
	  friendImgModalCollection[0].src = friendImgCollection[0].src

	  friendsModal.classList.add("friends-modal--open");
	});
}

friendsModalButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    friendsModal.classList.remove("friends-modal--open");
});

///тут кароче надо скопировать контент из карточки и вставить в модальное окно!!