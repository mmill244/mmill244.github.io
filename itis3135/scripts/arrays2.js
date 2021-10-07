var salary = []
var people = []

addSalary(person) 
{
    switch(person) 
    {
        case 'Grayson':
            people.push('Grayson')
            salary.push(100000)
            break
        case 'Alexander':
            people.push('Alexander')
            salary.push(120000)
            break
        case 'Nash':
            people.push('Nash')
            salary.push(98000)
            break
        case 'Jameson':
            people.push('Jameson')
            salary.push(100000)
            break
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
    
    document.getElementById("averageResults").innerHTML = "The average salary is: " + averageSalary + " The highest salary is: " + highestSalary
}

displaySalary() 
{
    for (let i = 0; i < salary.length; i++)
    {
        document.getElementById("salary").innerHTML = salary[i]
    }
    let table1 = document.createElement("table")
    for (let i = 0; i < people.length; i++) {
        let tableRow = table1.insertRow()
        let tableCell = tableRow.insertCell()
        tableCell.appendChild(document.createTextNode(people[i]))
    }
}