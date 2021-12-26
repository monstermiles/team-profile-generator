const Manager = require("/Users/milesmoss/Bootcamp/Homework/Homework-Week-10/team-profile-generator/lib/manager.js")





describe ('Manager Class', () => {
    const testManager = new Manager("Miles", "1", "miles@email.com", "1")
    it ('creates a new manager with name, id, email, and office number properties', () => {
        expect (testManager.name).toBe("Miles");
        expect (testManager.id).toBe("1");
        expect (testManager.email).toBe("miles@email.com");
        expect (testManager.office).toBe("1")
    });
})