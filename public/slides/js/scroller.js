
$(document).ready(function () {
	var steps = $('.step');
	var current_step = -1;
	$('body').animate({scrollTop:0},'slow');
	$(document).keydown(function(e) {
		var distance;
	    switch(e.which) {
	        case 37: // left
	        case 38: // up
	    		e.preventDefault(); // prevent the default action (scroll / move caret)	        
	        	if(current_step===-1) return;
	        	current_step--;
	        	distance =$('body').scrollTop()- $(steps).eq(current_step).height() - 20;
	        	$('body').animate({scrollTop:distance},'slow');
	        break;

	        case 39: // right
	        case 40: // down
	    		e.preventDefault(); // prevent the default action (scroll / move caret)	        
	        	if(current_step===steps.length) return;
	        	distance =$('body').scrollTop() + (current_step===-1 ? $('.container.beta:first').height(): $(steps).eq(current_step).height() + 20);
	        	$('body').animate({scrollTop:distance},'slow');
	        	current_step++;
	        break;

	        default: return; // exit this handler for other keys
	    }
	});	

});