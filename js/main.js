// Search Box
$('.header-navbar-boxLeft-btnSearch, .header-middlebar-boxLeft-btnSearch').click(function() {
  $('.popup-search').fadeIn();
  $('.popup-search, .popup-search-close').click(function() {
    $('.popup-search').fadeOut();
  });

  $('.popup-search-form').click(function (e) { 
    e.stopPropagation();
  });
})

// Navbar Mobile
$('.showMenu').click(function() {
  if(this.textContent=='add') {
    this.textContent = 'remove';
    $(this).next('ul').slideDown();
  }else {
    this.textContent = 'add';
    $(this).next('ul').slideUp();
  }
})

$('.header-middlebar-navbarBtn').click(function() {
  $('.header-navbar').fadeIn();
  $('.header-navbar .container').animate({left: '0'}, {queue: false, duration: 300});
  $('.header-navbar').click(function() {
    $('.header-navbar').fadeOut();
    $('.header-navbar .container').animate({left: '-100%'}, {queue: false, duration: 300});
  })
  
  $('.header-navbar .container').click(function (e) { 
    e.stopPropagation();
  });
})

// Navbar Computer
$(document).scroll(function () { 
  if($(document).scrollTop() <= 240) {
    $('.header-navbar').removeClass('p-fixed');
  }else {
    $('.header-navbar').addClass('p-fixed');
  }
});


//Slider
let countImages = $('.slider .slider-images div').length;
let currentImage = 1;
let lock = false;
let animateSlide = setInterval(changeSlide, 7000);
$('.slider-timeLine div').animate({width: '100%'}, {queue: false, duration: 7000});
function changeSlide(num = 1) {
  clearInterval(animateSlide);
  animateSlide = setInterval(changeSlide, 7000);
  $('.slider-timeLine div').css({width: '0'});
  let nextImage = 0;
  if(num == -1) {
    nextImage = currentImage==1 ? countImages : currentImage - 1;
  }else {
    nextImage = currentImage==countImages ? 1 : currentImage + 1;
  }

  $('#slider-image'+currentImage).fadeOut();
  $('#slider-image'+nextImage).fadeIn();

  $('#slider-text'+currentImage).hide();
  $('#slider-text'+nextImage).children().css('opacity', '0');
  $('#slider-text'+nextImage).show();
  $('#slider-text'+nextImage).children('.slider-texts-section1').css( "top", "-50px" ).animate({top: 0, 'opacity': 1}, {queue: false, duration: 300, complete: function() {
    $('#slider-text'+nextImage).children('.slider-texts-section2').css( "left", "-100px" ).animate({left: 0, 'opacity': 1}, 300);
    $('#slider-text'+nextImage).children('.slider-texts-section3').css( "left", "-100px" ).delay(100).animate({left: 0, 'opacity': 1}, 300, function() {
      $('#slider-text'+nextImage).children('.slider-texts-section4').delay(100).animate({'opacity': 1}, 300);
    });
  }});

  currentImage = nextImage;
  $('.slider-timeLine div').animate({width: '100%'}, {queue: false, duration: 7000});
}
$('.slider-prev').click(() => {changeSlide(-1)});
$('.slider-next').click(() => {changeSlide(1)});