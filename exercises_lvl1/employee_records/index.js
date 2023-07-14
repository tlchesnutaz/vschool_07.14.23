//empty employee array
const employees = []

//constructor function for each employee with status set to default to Full Time
function Employee (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = 'Full Time'
}

//printEmployeeForm function - prototype makes it availale to all instances without it being created for each one
Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + ",", "Title: " + this.title + ",", "Salary: $" + this.salary + "/year,", "Status: " + this.status)
}

//create employees using constructor
const silasR = new Employee("Silas R", "Manager", 50000);
const lucyC = new Employee("Lucy C", "Accountant", 55000);
const kyrieT = new Employee("Kyrie T", "Developer", 65000);

//override default status
lucyC.status = "Contract";

//print each employee form calling function
silasR.printEmployeeForm()
lucyC.printEmployeeForm()
kyrieT.printEmployeeForm()

//push employees into the employee array
employees.push(silasR, lucyC, kyrieT)
console.log(employees)
//notice difference between outputs...
employees.push("silasR", "lucyC", "kyrieT")
console.log(employees)

//assuming will learn to add if statment and for loop 
//to check if they exist and add them automatically if not...

