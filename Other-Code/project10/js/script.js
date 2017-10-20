
var isMobile = false;

$(document).ready(function(){

if ($('body').width() <= 959) {
  isMobile = true;
  $(function(){
    $('.view-source .hide').hide();
    $a = $('.view-source #button');
    $('#button').on('click', function(event) {
      event.preventDefault();
      $('#button').not(this).next().slideUp(500);
      $(this).next().slideToggle(500);
    });
  });
  }

if (!isMobile) {
  document.getElementById("button").remove();
}

});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

