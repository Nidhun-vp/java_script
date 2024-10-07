
class person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;//when we create a object constructor automatically works

    }
    getDetails()
    {
        return `Name ${this.name}, Age:${this.age}`;

    }
}
//derived class-employee inherits from person
class Employee extends person{
    constructor(name,age,employeeId)
    {
        super(name,age);//super get data from parent constructor 
        this.employeeId=employeeId;
    }
    getEmployeeDetails()
    {
        return ` ${this.getDetails()}, EmployeeId:${this.employeeId}`;

    }
}
//derived class-manager inherits from employee
class Manager extends Employee
{
    constructor(name,age,employeeId,department)
    {
        super(name,age,employeeId);
        this.department=department;
    }
    getManagerDetails()
    {
        return ` ${this.getEmployeeDetails()}, DepartmentId:${this.department}`;

    }
}
const manager=new Manager("john doe",35,"E12345","sales");
console.log(manager.getManagerDetails());
console.log(manager.getEmployeeDetails());
console.log(manager.getDetails());

