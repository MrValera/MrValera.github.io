
$(document).ready(function(){

var isMobile = false;

var getMaxHeight = function ($elms) {
  var maxHeight = 0;
  $elms.each(function functionName() {
    var height = $(this).height();
    if ( height > maxHeight ) {
      maxHeight = height;
    }
  });
  return maxHeight;
}

$('header').height( getMaxHeight($('header')) );
$('article').height( getMaxHeight($('article')) );
$('footer').height( getMaxHeight($('footer')) );


if ($('body').width() <= 768) {
      isMobile = true;
  }

if (!isMobile) {
$('.header--right').addClass('animated fadeIn');
$('.block').eq(0).addClass('animated bounceInLeft');
$('.block').eq(1).addClass('animated bounceInLeft');
$('.block').eq(2).addClass('animated bounceInRight');
$('.block').eq(3).addClass('animated bounceInRight');
$('.block').eq(4).addClass('animated bounceInLeft');
$('.block').eq(5).addClass('animated bounceInLeft');
$('.block').eq(6).addClass('animated bounceInRight');
$('.block').eq(7).addClass('animated bounceInRight');

  var h = $(window).height();
  $(window).scroll(function(){
  if ( ($(this).scrollTop() + h) >= $('.block').offset().top) {
    $('.block').css({visibility:"visible"});
    $('.block').eq(8).addClass('animated bounceInLeft');
    $('.block').eq(9).addClass('animated bounceInLeft');
    $('.block').eq(10).addClass('animated bounceInRight');
    $('.block').eq(11).addClass('animated bounceInRight');
  }

   if ( ($(this).scrollTop() + h) >= $('.column').offset().top ) {
     $('.column').css({visibility:"visible"});
     $('.column').eq(0).addClass('animated bounceInLeft');
     $('.column').eq(1).addClass('animated bounceInLeft');
     $('.column').eq(2).addClass('animated bounceInRight');
     $('.column').eq(3).addClass('animated bounceInRight');
   }

  });

}

});
