import { When, Then, Given, And } from "cypress-cucumber-preprocessor/steps";

let newAlarmValue = null;

Given("I am logged in", () => {
  cy.visit("/");
});

When("I press the dark mode toggle", () => {
  cy.dataCy("darkmode-toggle").click();
});

Then("the colorscheme becomes dark", () => {
  cy.dataCy("main-page").should("have.class", "main-page-darkmode");
  cy.screenshot();
});
