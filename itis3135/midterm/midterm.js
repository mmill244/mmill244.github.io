var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers

};

function updateCalories() {
    var caloriesInput = document.getElementById(calories);
    var dayInput = document.getElementById(day);

    
    //alert for valid calorie number
    if (caloriesInput == null) {
        alert("Enter a valid number");
    }
    

    //updating calories array
    for (let i = 0; i < days.length; i++) {
        if (dayInput == days[i]) {
            calories[i] = calories[i] + caloriesInput;
        }
    }   

    //alert for updated calories array
    alert("Your updated calories details are: " + calories);
    

    //clear calories box
}

function showAverageCalories() {
    let sum = 0;
    for (let i = 0; i < calories.length; i++) {
        sum = sum + calories[i];
    }
    let averageCalories = sum / calories.length;
    document.getElementById("averageCalories").style.color = "green";
    document.getElementById("averageCalories").style.backgroundColor = "transparent";
    document.getElementById("averageCalories").innerHTML = averageCalories;
}


function showMax() {
    //finding max calorie and corresponding day
    let maxCalorie = 0; 
    let maxCalorieDay = "";
    for (let i = 0; i < calories.length; i++) {
        if (maxCalorie < calories[i]) {
            maxCalorie = calories[i];
            maxCalorieDay = days[i];
        }
    }

    //showing on HTML page
    const paragraph = document.createElement("p");
    const node = document.createTextNode("Your maximum consumed calorie is " + maxCalorie + " on " + maxCalorieDay);
    paragraph.appendChild(node);
    const element = document.getElementById("showMax");
    element.appendChild(paragraph);

}

