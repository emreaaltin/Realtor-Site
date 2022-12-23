window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").style.height = "200px";
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.height = "70px";
    document.getElementById("navbar").style.padding = "10px 0px 0px 0px";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.padding = "0px 0px 0px 0px";
    document.getElementById("navbar").style.height = "100px";
  }
}
ScrollReveal().reveal('.hero-text');
ScrollReveal().reveal('.mail');
ScrollReveal().reveal('.card');

// SAYAÇ
$(document).ready(function(t){function n(n){var e=t(window).scrollTop()+t(window).height();return t(n).offset().top+t(n).height()<=e}function e()       {t(".counter").each(function(){var e=t(this),o=e.attr("data-count");ended=e.attr("ended"),"true"!=ended&&n(e)&&(t({countNum:e.text()}).animate({countNum:o},  {duration:1500,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function()                      {e.text(this.countNum)}}),e.attr("ended","true"))})}n(".counter")&&e(),t(document).scroll(function(){n(".counter")&&e()})});