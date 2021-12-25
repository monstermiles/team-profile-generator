const Employee = require("./lib/employee")





describe ('Employee Class', () => {
    it ('creates a new employee with name, id and email properties', () => {
        const testEmployee = new Employee("Miles", "1", "miles@email.com")
        expect (testEmployee.name).toBe("Miles");
        expect (testEmployee.id).toBe("1");
        expect (testEmployee.email.toBe("miles@email.com"))
    });
})