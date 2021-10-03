//Activity #6 - Name the Polygon
var brandName = "Mystified Mouse";
var entry = 0;
var numSides = 0;

function mascot() {
    var userName = prompt("Enter your name");
    document.getElementById("mascot").innerHTML = "The " + brandName + " welcomes you, " + userName + "!";
}

function retrievingEntry() {
    entry = prompt("Please pick a whole number between 0 and 10.");
    document.getElementById("retrievingEntry").innerHTML = "The number you picked: " + entry;
}

//if entry is not validated, this function will be called
function dialogueBox() {
    entry = prompt("Error! Please pick a whole number between 0 and 10");
    return entry;
}

//function for validating entry, will use the passed in entry from dialogue box
function validateEntry(entry) {
    numSides = Math.round(entry);
    if (numSides < 0) {
        numSides = Math.abs(numSides);
    } 
    while (numSides > 10) {
        newEntry = dialogueBox();
        validateEntry(newEntry);
    }
    return numSides;
}

//this function will return the name of the polygon that has the passed in number of sides
function getShape(numberOfSides) {
    var numberTested = validateEntry(numberOfSides)
    var result = " ";
    switch(numberTested) {
        case 0:
            result = "No polygon with 0 sides";
            break;
        case 1:
            result = "henagon";
            break;
        case 2:
            result = "digon";
            break;
        case 3:
            result = "trigon";
            break;
        case 4:
            result = "tetragon";
            break;
        case 5:
            result = "pentagon";
            break;
        case 6:
            result = "hexagon";
            break;
        case 7:
            result = "heptagon";
            break;
        case 8:
            result = "octagon";
            break;
        case 9:
            result = "enneagon";
            break;
        case 10:
            result = "decagon";
            break;
    } 
    document.getElementById("getShape").innerHTML = " Your validated number is " + numSides + ", your shape is " + result;     
}