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