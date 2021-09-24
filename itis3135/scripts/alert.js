alert("My script is running!");

var brandName = "Mystified Mouse";

function mascot() {
    var userName = prompt("Enter your name");
    var userWellbeing = prompt("How are you doing?");
    var date = new Date(Date.now());
    var output1 = "Today is " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() 
                    + ", and the time is: " + date.getHours() + ":" + date.getMinutes() + "." 
    var output2 = " The " + brandName + " welcomes you, " + userName + "! We're glad you are doing " + userWellbeing + "!";
    document.getElementById("mascot").innerHTML = output1;
    document.getElementById("mascot").innerHTML += output2;
}


function riddle() {
    document.getElementById("riddle").innerHTML = "What kind of room has no doors or windows?";
}

function riddleAnswer() {
    document.getElementById("riddleAnswer").innerHTML = "A mushroom!";
}

//not sure which way will print out the fortune
function fortune() {
    var num = Math.floor(Math.random() * 5);
    var result = " ";
    switch(num) {
        case 0:
            result = "You will be talented in many ways";
            break;
        case 1:
            result = "You should do something kind today";
            break;
        case 2:
            result = "You will have many friends in your life";
            break;
        case 3:
            result = "You are going to be very successful";
            break;
        case 4:
            result = "Good fortune will be yours";
            break;
    }
    document.getElementById("fortune").innerHTML = result;
}

function avgMilesMiceRun() {
    var result = "";
    var input = prompt("How many miles do you think a mouse averages in a day?")
    if (input == 7.5) {
        result = "Yes! They can run from 2.5 - 12.5 miles everyday";
    } else if (input >= 7 && input <= 8) {
        result = "Close! A mouse can average 7.5 miles a day.";
    } else {
        result = "No, a mouse can average 7.5 miles a day!";
    }
    document.getElementById("avgMilesMiceRun").innerHTML = result;
}

function mouseAgeCalculator() {
    var result = "";
    var input = prompt("How old are you?");
    result = "You would be " + input / 5 + " months old if you were a mouse!";
    document.getElementById("mouseAgeCalculator").innerHTML = result;
}