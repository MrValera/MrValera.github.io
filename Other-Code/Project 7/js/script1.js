
var isMobile = false;

$(document).ready(function(){


if ($('body').width() <= 768) {
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

  $('.post1').eq(0).addClass('animated zoomIn');
  $('.post1').eq(1).addClass('animated zoomIn');
  $('.post1').eq(2).addClass('animated zoomIn');

  $('#content--block').eq(0).addClass('animated fadeIn');

  $('.content--block').eq(0).addClass('animated bounceInUp');
  $('.content--block').eq(1).addClass('animated bounceInUp');
  $('.content--block').eq(2).addClass('animated bounceInUp');
  $('.content--block').eq(3).addClass('animated bounceInUp');
  $('.content--block').eq(4).addClass('animated bounceInUp');


    var h = $(window).height();
    $(window).scroll(function(){
    if ( ($(this).scrollTop() + h) >= $('.content--aboutSpace__box').offset().top) {
    $('.content--aboutSpace__box').css({visibility:"visible"});
    $('.content--aboutSpace__box').eq(0).addClass('animated bounceInLeft');
    $('.content--aboutSpace__box').eq(1).addClass('animated bounceInDown');
    $('.content--aboutSpace__box').eq(2).addClass('animated bounceInRight');
    }
  });

}

});


doc_w = $(window).width();

function Slider(width_li,margin_right_li,col_view_img){
  var step = width_li + margin_right_li,
  slider_box_with = col_view_img * step - margin_right_li,

  $col_img = $("#slider--box>ul>li").length,
  col_main_left = 0,
  max_col_main_left = $col_img * step;

  $("#slider--box").width(slider_box_with);

  $("#slider--box > ul > li").width(width_li).css("margin-right",margin_right_li);

  $("#right--nav").click(function(){
  if(-col_main_left == max_col_main_left - col_view_img * step){
  col_main_left = 0;
  } else{
  col_main_left = col_main_left - step;
  }

  $("#slider--box > ul").css("margin-left",col_main_left+"px");
  });

  $("#left--nav").click(function(){
  if(col_main_left == 0){
  col_main_left =- max_col_main_left + col_view_img * step;
  } else{
  col_main_left = col_main_left + step;
  }

  $("#slider--box > ul").css("margin-left",col_main_left+"px");
  });
}

$(Slider(doc_w, 10, 1));
