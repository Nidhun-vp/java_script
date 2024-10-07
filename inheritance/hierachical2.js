
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
    class Manager extends person
    {
        constructor(name,age,department)
        {
            super(name,age);
            this.department=department;
        }
        getManagerDetails()
        {
            return ` ${this.getDetails()}, DepartmentId:${this.department}`;
    
        }
    }
   // const manager=new Manager("john doe",35,"E12345","sales");
    // console.log(manager.getManagerDetails());
    // console.log(manager.getEmployeeDetails());
    // console.log(manager.getDetails());
    const myemp=new Employee("john doe",35,"E12345")
    const mymanager=new Manager("john doe",35,"sales")
   console.log(myemp.getEmployeeDetails())

console.log(myemp.getDetails())
     console.log(mymanager.getDetails())
     console.log(mymanager.getManagerDetails())
   