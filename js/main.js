$(document).ready(function(){
  $("#left_arrow").click(function(){
  		$("#leftPortal").toggleClass("col-md-2");
        $("#leftPortal").toggleClass("togLeftDiv");
        $("#left_arrow").toggleClass("angleLeft");

        $("img").toggleClass('imgToggle');
        $("span,#leftDash,ul,#dropLegal").toggle();

	});


  $(".fa-angle-down").click(function(){
  	$('li').toggle();
  });
});