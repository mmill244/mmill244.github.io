var salary = []
var people = ["Norville Rogers", "Marcie Fleach", "Sally McKnight", "Sarah Ravencroft", "Peggy Jones", "Daisy Blake", "Bill McLemore"]

function addSalary() 
{
    var salaryInput = prompt("Assign a salary to employee")
    salary.push(salaryInput)
}

//this function will get the average and highest salary from the salary array
function displayResults() 
{
    let sum = 0
    let highestSalary = 0
    for(let i = 0; i < salary.length; i++) 
    {
        sum += parseInt(salary[i])
        if (highestSalary < salary[i]) 
        {
            highestSalary = salary[i]
        }
    }
    let averageSalary = sum / salary.length

    /*
    const heading = document.createElement("h2")
    const headNode = document.createTextNode("Displayed Results")
    heading.appendChild(headNode)

    const paragraph = document.createElement("p")
    const averageNode = document.createTextNode("Average Salary")
    const highestNode = document.createTextNode("Highest Salary")
    paragraph.appendChild(averageNode)
    paragraph.appendChild(highestNode)

    const element = document.getElementById("div")
    element.appendChild(heading)
    element.appendChild(paragraph)
    */
    document.getElementById("results").innerHTML = "The average salary is: " + averageSalary + " The highest salary is: " + highestSalary
}

function displaySalary() 
{
    let table = document.getElementById("results_table")
    let tableRow = table.insertRow()
    let nameCell = tableRow.insertCell(0)
    let salaryCell = tableRow.insertCell(1)
    nameCell.innerHTML = "Name"
    salaryCell.innerHTML = "Salary"
    for (let i = 0; i < people.length; i++) {
        tableRow = table.insertRow()
        let tableCell3 = tableRow.insertCell(0)
        let tableCell4 = tableRow.insertCell(1)
        tableCell3.innerHTML = people[i]
        tableCell4.innerHTML = salary[i]
    }
}


