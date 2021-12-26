const Engineer = require("/Users/milesmoss/Bootcamp/Homework/Homework-Week-10/team-profile-generator/lib/engineer.js")





describe ('Engineer Class', () => {
    const testEngineer = new Engineer("Miles", "1", "miles@email.com", "milesgithub")
    it ('creates a new engineer with name, id, email, and github properties', () => {
        expect (testEngineer.name).toBe("Miles");
        expect (testEngineer.id).toBe("1");
        expect (testEngineer.email).toBe("miles@email.com");
        expect (testEngineer.github).toBe("milesgithub")
    });
})