const Intern = require("../lib/Intern");

test("Could set school via constructor", () => {
  const testValue = "SUNY";
  const e = new Intern("Jan", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jan", 1, "test@test.com", "SUNY");
  expect(e.getRole()).toBe(testValue);
});

test("Could get school via getSchool()", () => {
  const testValue = "SUNY";
  const e = new Intern("Jan", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});