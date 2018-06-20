$(function() {
  $('.navbar a').on('click', function(e) {
    e.preventDefault();

    var targetId = $(this).attr('href');
    var targetTop = $(targetId).position().top - 0

    $('body').animate({
      scrollTop: targetTop
    });
  });
});

$(function() {
  $(".arrow").delay(4500).fadeIn();
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 660) {
    $('.navbar').fadeIn(0);
  } else {
    $('.navbar').fadeOut(0);
  }
});

$(function() {
  $('#enlarge-font-button').on('click', function() {
    $('#enlarge-font-text').toggleClass('enlarge-font-effect');
  });

  $('#slide-button').on('click', function() {
    $('#slide-text').toggleClass('slide-effect');
  });

  $('#rotate-button').on('click', function() {
    $('#box').toggleClass('rotate-effect');
  });

});
