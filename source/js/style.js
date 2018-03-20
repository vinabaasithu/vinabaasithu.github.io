$(document).ready(function(){
  // HELLO CAT openedHello
  $(".catCover, .coverIndex span.text-center, .coverIndex span.speak").hover(function(){
    $(".coverIndex span.text-center").css({"background-color": "#EAEAEA", "color": "#2B2B2B"});
    }, function(){
    $(".coverIndex span.text-center").css({"background-color": "#2B2B2B" ,"color": "#EAEAEA"});
  });
  $(".catCover, .coverIndex span.text-center, .coverIndex span.speak").hover(function(){
    $(".coverIndex span.speak").css("border-left", "6vw solid #EAEAEA");
    }, function(){
    $(".coverIndex span.speak").css("border-left", "6vw solid #2B2B2B");
  });
  $(".coverIndex .fa-angle-up").click(function(){
    $(".openedHello").slideUp();
    $(".openedHome").slideDown(600);
  });

  // HEADER AND Nav
  $(".WebIcon, .WebIconHover").hover(function(){
    $(".WebIcon").css("display", "none");
    $(".WebIconHover").css("display", "inline-block");
  }, function(){
    $(".WebIconHover").css("display", "none");
    $(".WebIcon").css("display", "inline-block");
  });
})
