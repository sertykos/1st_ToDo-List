
$(document).ready(function() {                           
    $(".boton1").click(function() {                      
        var agregar = $("input[name=text]").val();
        $("ol").prepend('<li>'+agregar+'</li>');

    });

    $(document).keypress(function(e) {
    if(e.which == 13) {
      var agregar = $("input[name=text]").val();
      $("ol").prepend('<li>'+agregar+'</li>');
      }
    });
 
  	$(document).on('click', 'li',function() {
    
    	$(this).toggleClass("green");

	   });

  	
    $(".boton2").click(function(){
      $("ol").empty();
    });
	
	  $(".boton3").click(function(){
    $(".green").remove();
  	});
  });