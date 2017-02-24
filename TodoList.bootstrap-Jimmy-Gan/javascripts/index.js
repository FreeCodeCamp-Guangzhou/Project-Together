$(function() {
  $("input").on("keypress",function() {
	var val = $("input").val();
	if (val !== "" && event.which == 13) {
	  var newrow = $("<div class='row'></div>");
	  var newtodo = $("<li class='col span8'></li>").text(val);
	  $(newrow).append(newtodo);
	  $(newrow).append("<button class='remove col span4'>remove</button>");
	  $("#target").append(newrow);
	  $("input").val("");             
	  $(".remove").on("click",function() {
          $(this).parent().remove();
    })
	};
})
});
