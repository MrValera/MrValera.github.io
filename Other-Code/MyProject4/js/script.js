
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});


$(function(){
  $('.view-source .hide').hide();
  $a = $('.view-source a');
  $a.on('click', function(event) {
    event.preventDefault();
    $a.not(this).next().slideUp(500);
    $(this).next().slideToggle(500);
  });
});

