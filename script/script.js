//Slider
var slideBtn = document.querySelectorAll('.popular__button');
var sliders = document.querySelectorAll('.popular__item');
var slideBtn2 = document.querySelectorAll('.popular__button--second');
var slideBtn3 = document.querySelectorAll('.popular__button--third');

	for (var i = 0; i < slideBtn.length; i++){
	slideBtn[i].dataset.dt = i;
	slideBtn[i].addEventListener('click', function(evt){
		evt.preventDefault();
		for (var sld = 0; sld < sliders.length; sld++){
		sliders[sld].classList.add('d-none');
	}	
	var j = ((this.dataset.dt  ) % 3) ;
		sliders[j].classList.remove('d-none');
	});
}

//Tabs


var servisBtn = document.querySelectorAll('.servises__link');
var servises = document.querySelectorAll('.servises__item');

for (var i = 0; i < servisBtn.length; i++) {
	servisBtn[i].dataset.dt = i;
	servisBtn[i].addEventListener('click', function(evt){
		evt.preventDefault();
		for (var j= 0; j < servises.length; j++){
			servises[j].classList.add('abs-hidden');
			servisBtn[j].classList.remove('servises__link--current');
		}
		this.classList.add('servises__link--current');
		servises[this.dataset.dt].classList.remove('abs-hidden');

	})

}
//popup
var contactsBtn = document.querySelector('.contacts__link');
var popupWrite = document.querySelector('.popup-write-us');
var mapBtn = document.querySelector('.map_link');
var popupMap = document.querySelector('.popup-map');
var popupClose = document.querySelectorAll('.popup-close');

contactsBtn.addEventListener('click', function(evt){
	evt.preventDefault();
	popupWrite.classList.remove('d-none');
	popupWrite.classList.add('modal-animate');
});

mapBtn.addEventListener('click', function(evt){
	evt.preventDefault();
	popupMap.classList.remove('d-none');
	popupMap.classList.add('modal-animate');
});
for (var i =0; i < popupClose.length; i++) {
	popupClose[i].addEventListener('click', function(evt){
	evt.preventDefault();
	if (!(popupMap.classList.contains('d-none'))) {
	popupMap.classList.add('d-none');
	} else {
	popupWrite.classList.add('d-none');
	}
});
}

	



