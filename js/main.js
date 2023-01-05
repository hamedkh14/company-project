// Search Box
$('.header-navbar-boxLeft-btnSearch').click(function() {
  $('.popup-search').fadeIn();
  $('.popup-search, .popup-search-close').click(function() {
    $('.popup-search').fadeOut();
  });

  $('.popup-search-form').click(function (e) { 
    e.stopPropagation();
  });
})