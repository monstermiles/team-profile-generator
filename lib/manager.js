const Employee = require("./employee");


class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email);
        this.office = office 
    }

    //    getJobTitle() {
    //        return "manager";
    //        console.log("getting position")
    //    }
    
    
}


module.exports = Manager;