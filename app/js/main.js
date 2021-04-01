$(document).ready(function() {
	
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true
  });

  $('.navigation__btn').on('click', function() {
    $('.navigation__list').toggleClass('navigation__list--active');
  });
  
  var mixer = mixitup('.products__items');

})