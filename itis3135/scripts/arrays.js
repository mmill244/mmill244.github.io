var salary = []
var people = []

addSalary(person) 
{
    if (person === " ")
    {
        alert("Entry is invalid")
    } else {
        people.push(person)
        var input = prompt("Assign a salary to employee")
        var salaryInput = parseInteger(input, 10)
        if (salaryInput.isInteger())
        {
            salary.push(salaryInput)
        } else {
            alert("Entry is invalid")
        }
    }
}

//this function will get the average and highest salary from the salary array
displayResults() 
{
    let sum = 0
    let highestSalary = 0
    for(let i = 0; i < salary.length; i++) 
    {
        sum = sum + salary[i]
        if (highestSalary < salary[i]) 
        {
            highestSalary = salary[i]
        }
    }
    let averageSalary = sum / salary.length

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

    document.getElementById("results").innerHTML = "The average salary is: " + averageSalary + " The highest salary is: " + highestSalary
}

displaySalary() 
{
    let table = document.getElementById("table_results")
    for (let i = 0; i < people.length; i++) {
        let tableRow = table.insertRow(i)
        let tableCell1 = tableRow.insertCell(0)
        let tableCell2 = tableRow.insertCell(1)
        tableCell1.innerHTML = people[i]
        tableCell2.innerHTML = salary[i]
    }
}

const peopleButton = document.querySelectorAll('[people]')

//if user clicks on person in the select drop-down menu

peopleButton.forEach(option => {
    var employeeName = document.getElementById("employee")
    addSalary(employeeName.options[employeeName.selectedIndex].text)
})

let select = document.querySelector("employee")
let result = document.querySelector("results")
select.addEventListener('click', addSalary())

document.getElementById("employee").addEventListener("click", ?)
