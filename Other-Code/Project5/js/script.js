
var isMobile = false;

$('.grid').masonry({
  columnWidth: '.grid-item',
  itemSelector: '.grid-item',
});

$(document).ready( function() {
    if ($('body').width() <= 400) {
        isMobile = true;
    }

    if (!isMobile) {
      var h = $(window).height();
      $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $('.post1').offset().top) {
          $('.post1').css({visibility:"visible"});
          $('.post1').eq(0).addClass('animated bounceInLeft');
          $('.post1').eq(1).addClass('animated bounceInUp');
          $('.post1').eq(2).addClass('animated bounceInRight');
        }

        if ( ($(this).scrollTop()+h) >= $('.anim1').offset().top) {
          $('.anim1').css({visibility:"visible"});
          $('.anim1').eq(0).addClass('animated bounceInLeft');
          $('.anim1').eq(1).addClass('animated bounceInLeft');
          $('.anim1').eq(2).addClass('animated bounceInLeft');
          $('.anim1').eq(3).addClass('animated bounceInLeft');
        }

        if ( ($(this).scrollTop()+h) >= $('.anim2').offset().top) {
          $('.anim2').css({visibility:"visible"});
          $('.anim2').eq(0).addClass('animated bounceInRight');
          $('.anim2').eq(1).addClass('animated bounceInRight');
          $('.anim2').eq(2).addClass('animated bounceInRight');
          $('.anim2').eq(3).addClass('animated bounceInRight');
        }

        if ( ($(this).scrollTop()+h) >= $('.block').offset().top) {
          $('.block').css({visibility:"visible"});
          $('.block').eq(0).addClass('animated flipInY');
          $('.block').eq(1).addClass('animated flipInY');
          $('.block').eq(2).addClass('animated flipInX');
          $('.block').eq(3).addClass('animated flipInY');
          $('.block').eq(4).addClass('animated flipInY');
          $('.block').eq(5).addClass('animated flipInX');
          $('.block').eq(6).addClass('animated flipInY');
        }
      });

    }
} );
