$(document).ready(function(){

function checkingNumber(input) {
    input.value = input.value.replace(/[0-9]/,'');
};

$('#first_name_comment').on('keyup', function(){
    checkingNumber(this);
});
	
$("#tell").mask("+375 (99) 999-99-99" );


// $( ".form_send" ).click(function(){ 
// 	    $( ".form_wrap" ).submit(); 
// 	  });
// 	  $( ".form_wrap" ).submit(function( event ){ 
// 	    event.preventDefault(); 
// 	    $( ".request__popup" ).css({ 
// 				                 "display": "block"
				                
// 				               })
				                
// 	  });
// 	$(".send_close_cl").click( function(){
// 			 $( ".request__popup" ).css({ 
// 				                 "display": "none"
// 				               }).fadeOut( 1000 );
// 			 $('#required_сomment')[0].reset();

// 		}
// 	) 

})