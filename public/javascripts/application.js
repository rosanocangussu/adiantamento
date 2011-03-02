$(document).ready(function(){
  $(".aba:first").show();
  $("#nav-aba a").click(function(){
    $(".aba").hide();
    var div = $(this).attr('href');
    $(div).fadeIn(500);
  });

  });

