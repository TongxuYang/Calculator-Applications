previous_operation = "plus";
current_value = "0";
previous_value = "0";
function add_digit(x){
	if(current_value == "0"){
		current_value = x
	}else{
		current_value = current_value + x 
	}
	document.getElementById('displays').value = current_value;
}
function operation_plus(){
	calculate_result();
	previous_value = current_value;
	current_value = "0";
	previous_operation = "plus";
}
function operation_minus(){
	calculate_result();
	previous_value = current_value;
	current_value = "0";
	previous_operation = "minus";
}
function operation_times(){
	calculate_result();
	previous_value = current_value;
	current_value = "0";
	previous_operation = "times";
}
function operation_divide(){
	calculate_result();
	previous_value = current_value;
	current_value = "0";
	previous_operation = "divide";
}
function calculate_result(){
	if(previous_operation == "plus"){
		current_value = parseInt(previous_value) + parseInt(current_value)
	}else if(previous_operation == "minus"){
		current_value = parseInt(previous_value) - parseInt(current_value) 
	}else if (previous_operation == "times"){
		current_value = parseInt(previous_value) * parseInt(current_value)
	}else if (previous_operation == "divide"){
		if(current_value == "0"){
			previous_operation = "plus";
			previous_value = "0";
			alert("error")
		}else{
			current_value = Math.floor(parseInt(previous_value) / parseInt(current_value))
		}
		
	}
	document.getElementById('displays').value = current_value;	
}
function operation_equal(){
	if(previous_operation == "plus"){
		current_value = parseInt(previous_value) + parseInt(current_value)
	}else if(previous_operation == "minus"){
		current_value = parseInt(previous_value) - parseInt(current_value) 
	}else if (previous_operation == "times"){
		current_value = parseInt(previous_value) * parseInt(current_value)
	}else if (previous_operation == "divide"){
		if(current_value == "0"){
			previous_operation = "plus";
			previous_value = "0";
			alert("error")
		}else{
			current_value = Math.floor(parseInt(previous_value) / parseInt(current_value))
		}
		
	};
	document.getElementById('displays').value = current_value;
	previous_operation = "plus";
	current_value = "0";
	previous_value = "0";
}