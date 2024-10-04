import { Given, When, Then, Before, After} from '@badeball/cypress-cucumber-preprocessor'


Before(() => {
    cy.log('Before each test')
})

After(() => {
    cy.log('After each test')
})

Given("I have launched the swag labs application", function () {
    cy.visit('https://www.saucedemo.com/v1/index.html');
});

When("I enter the correct username and password", function () {

    const uname_elm = '#user-name'
    const pwd_elm = '#password'

    cy.get(uname_elm).type('standard_user');
    cy.get(pwd_elm).type('secret_sauce');

});

When("I click on the login button", function () {
    const loginbtn_elm = '#login-button'
    cy.get(loginbtn_elm).click();
});

Then("I should land on the products page", function () {
    cy.get('div.product_label').should("have.text", 'Products');
});


When(`I enter the incorrect username and password`, () => {
    const uname_elm = '#user-name'
    const pwd_elm = '#password'

    cy.get(uname_elm).type('standard_user');
    cy.get(pwd_elm).type('abc1234');
});

Then(`I should get the error message {string}`, (Message) => {
    const error_elm = 'h3'
    cy.get(error_elm).contains(Message);
});

When(`I enter the username as {string}`, (UserName) => {
    const uname_elm = '#user-name'
    cy.get(uname_elm).type(UserName);
});

When(`I enter the password as {string}`, (Password) => {
    const pwd_elm = '#password'
    cy.get(pwd_elm).type(Password);
});