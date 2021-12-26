const Intern = require("/Users/milesmoss/Bootcamp/Homework/Homework-Week-10/team-profile-generator/lib/intern.js")





describe ('Intern Class', () => {
    const testIntern = new Intern("Miles", "1", "miles@email.com", "Northwestern")
    it ('creates a new intern with name, id, email, and school properties', () => {
        expect (testIntern.name).toBe("Miles");
        expect (testIntern.id).toBe("1");
        expect (testIntern.email).toBe("miles@email.com");
        expect (testIntern.school).toBe("Northwestern")
    });
})