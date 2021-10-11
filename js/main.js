$(document).ready(function () {
  const hotelSlider = new  Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--prev',
    prevEl: '.hotel-slider__button--next',
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new  Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

var menuButton = $(".menu-button");
menuButton.on('click', function (){
  $(".navbar-bottom").toggleClass('navbar-bottom--visible');
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).on('keydown', function (e){
    if (e.which === 27){
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  })
  // Обработка форм
  $('.form').each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "At least two letters",
      },
      email: {
        required: "We need your email to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "We need your phone to contact you",
     },
    },
   });
   AOS.init();
  });
});

$(document).ready(function() {
    $("#phone").mask("+7 (999) 99-99-999");
    $("#phone-2").mask("+7 (999) 99-99-999");
});

$(window).width(function(){

if ($(window).width() < 992){ 
    AOS.init({
      disable: 'mobile'
    });
};
});