
$(function(){
  $('.view-source .hide').hide();
  $a = $('.view-source .blog--post__button');
  $('.blog--post__button').on('click', function(event) {
    event.preventDefault();
    $('.blog--post__button').not(this).next().slideUp(500);
    $(this).next().slideToggle(500);
  });
});
