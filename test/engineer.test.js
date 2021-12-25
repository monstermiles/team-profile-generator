const Engineer = require("./lib/engineer")





describe ('Engineer Class', () => {
    const testEngineer = new Manager("Miles", "1", "miles@email.com, '1")
    it ('creates a new manager with name, id, email, and office number properties', () => {
        expect (testEngineer.name).toBe("Miles");
        expect (testEngineer.id).toBe("1");
        expect (testEngineer.email.toBe("miles@email.com"));
        expect (testEngineer.github).toBe("milesgithub")
    });
})