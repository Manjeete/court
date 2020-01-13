$(document).ready(function(){
  $("#left_arrow").click(function(){
  		$("#leftPortal").toggleClass("col-md-2");
        $("#leftPortal").toggleClass("togLeftDiv");
        $("#left_arrow").toggleClass("angleLeft");
        $('.fa-balance-scale').toggleClass("balanceScale");
        $("img").toggleClass('imgToggle');
        $("#span1,#leftDash,ul,#dropLegal").toggle();

	});


  $(".fa-angle-down").click(function(){
  	$('li').toggle();
  });
});