import cypress = require("cypress");
import { When, Then, Given, And } from "cypress-cucumber-preprocessor/steps";

let preselectedAvatar = null;

Given("I am logged in", () => {
  cy.visit("/");
});

And("the preselected avatar is {int}", (avatar: number) => {
  preselectedAvatar = avatar;
  const selectedAvatar = cy.dataCy("avatar").first();
  selectedAvatar.should("have.attr", "src", `assets/${avatar}.png`);
});

When("I press the edit button", () => {
  cy.dataCy("change-avatar").click();
});

And("click on avatar image {int}", (avatar) => {
  cy.dataCy("avatar-selector").within(() => {
    const avatarToClick = cy.get("img").eq(avatar - 1); // index based - get image 2
    avatarToClick.click();
  });
});

Then("the selected avatar is {int}", (avatar) => {
  const selectedAvatar = cy.dataCy("avatar").first();
  selectedAvatar.should("have.attr", "src", `assets/${avatar}.png`);
  cy.screenshot();
});
