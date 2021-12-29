import { When, Then, Given, And } from "cypress-cucumber-preprocessor/steps";

let newAlarmValue = null;

Given("I am logged in", () => {
  cy.visit("/");
});

When("I press the edit alarm button", () => {
  cy.dataCy("edit-alarm-btn").click();
});

And("set the alarm time to {int}", (alarmValue) => {
  newAlarmValue = alarmValue;
  cy.dataCy("alarm-input").click().clear().type(alarmValue);
  cy.dataCy("save-alarm").click();
});

Then("the countdown is reset to the set value", () => {
  cy.dataCy("countdown").within(() => {
    cy.get("span:first").should("have.text", `00:${newAlarmValue}:00`);
  });
  cy.screenshot();
});
