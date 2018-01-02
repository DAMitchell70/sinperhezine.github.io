//check off specific todos by clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	var output ="";
  if(event.which === 13){
	  //grabbing new todo text from input
	  output = $(this).val();
	  $(this).val("");
  	  //create a new li add to ul
	  $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ output +"</li>");
  }
	
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});