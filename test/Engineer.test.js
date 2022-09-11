const Engineer = require("../lib/Engineer");

test("Could set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jan", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jan", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Could get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jan", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});