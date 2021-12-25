const Intern = require("./lib/intern")





describe ('Intern Class', () => {
    const testIntern = new Manager("Miles", "1", "miles@email.com, '1")
    it ('creates a new manager with name, id, email, and office number properties', () => {
        expect (testIntern.name).toBe("Miles");
        expect (testIntern.id).toBe("1");
        expect (testIntern.email.toBe("miles@email.com"));
        expect (testIntern.school).toBe("Northwestern")
    });
})