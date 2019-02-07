$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
  　　arrows: false,
  　　slidesToShow:3,
    centerMode:true,
  　　prevArrow:'<div class="prev">PREV</div>',
  　　nextArrow:'<div class="next">NEXT</div>'
  　});
 });
