const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Could instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Could set name via constructor arguments", () => {
        const name = "Gigi";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Could set id via constructor argument", () => {
        const testValue = 100;
        const e = new Employee("Jan", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Could set email via constructor argument", () => {
        const testValue = "test@test.com";
        const e = new Employee("Jan", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Could get name via getName()", () => {
            const testValue = "Gigi";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Could get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Jan", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Could get email via getEmail()", () => {
            const testValue = "test@test.com";
            const e = new Employee("Jan", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Gigi", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});