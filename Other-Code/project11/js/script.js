var h = $(window).height();
  $(window).scroll(function(){
  if ( ($(this).scrollTop() + h) >= $('.text--block').offset().top) {
  $('.text--block').css({visibility:"visible"});
  $('.text--block').eq(0).addClass('animated fadeInLeftBig');
  $('.text--block').eq(1).addClass('animated fadeInRightBig');
  }

  if ( ($(this).scrollTop() + h) >= $('._2anim').offset().top ) {
  $('._2anim').css({visibility:"visible"});
  $('._2anim').eq(0).addClass('animated flipInX');
  $('._2anim').eq(1).addClass('animated flipInX');
  $('._2anim').eq(2).addClass('animated flipInX');
  $('._2anim').eq(3).addClass('animated flipInX');
  $('._2anim').eq(4).addClass('animated flipInX');
  $('._2anim').eq(5).addClass('animated flipInX');
  $('._2anim').eq(6).addClass('animated flipInX');
  }

if ( ($(this).scrollTop() + h) >= $('.column--main__title').offset().top) {
  $('.column--main__title').css({visibility:"visible"});
  $('.column--main__title').eq(0).addClass('animated zoomIn');
  $('.column--main__title').eq(1).addClass('animated zoomIn');
  }

if ( ($(this).scrollTop() + h) >= $('.column--block').offset().top) {
  $('.column--block').css({visibility:"visible"});
  $('.column--block').eq(0).addClass('animated slideInUp');
  $('.column--block').eq(1).addClass('animated slideInUp');
  $('.column--block').eq(2).addClass('animated slideInUp');
  $('.column--block').eq(3).addClass('animated slideInUp');
  }

if ( ($(this).scrollTop() + h) >= $('.info--block').offset().top) {
  $('.info--block').css({visibility:"visible"});
  $('.info--block').eq(0).addClass('animated zoomIn');
  }


if ( ($(this).scrollTop() + h) >= $('.column--block__green').offset().top) {
  $('.column--block__green').css({visibility:"visible"});
  $('.column--block__green').eq(0).addClass('animated slideInUp');
  $('.column--block__green').eq(1).addClass('animated slideInUp');
  $('.column--block__green').eq(2).addClass('animated slideInUp');
  $('.column--block__green').eq(3).addClass('animated slideInUp');
  }

if ( ($(this).scrollTop() + h) >= $('._3anim').offset().top) {
  $('._3anim').css({visibility:"visible"});
  $('._3anim').eq(0).addClass('animated slideInLeft');
  $('._3anim').eq(1).addClass('animated slideInRight');
  }

});