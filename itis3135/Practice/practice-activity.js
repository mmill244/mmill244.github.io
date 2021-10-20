var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

	
	//event handler
	const imageList = evt => {
		if (document.querySelector("#cappuccino").value == "cappucino") {
			const cappuccinoPrice = 3.45;
			const cappuccinoDetails = "Delicious Cappuccino!";

		} else if (document.querySelector("#espresso").value == "espresso") {
			const espressoPrice = 1.95;
			const espressoDetails = "Delicious espresso. Wanna try it?";
		}
	}

	//attaching event handler to click event
	$("cappuccino").addEventListener("click", imageList)
	//add onclick event handler for each image
	document.getElementById("place_order").innerHTML = total();
	// for click event add item to order and update total

	// display order and total

	
		
}; // end onload