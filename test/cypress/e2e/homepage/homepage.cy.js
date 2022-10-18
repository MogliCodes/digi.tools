import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'


Given('Visitor is on homepage', () => {
    console.log('Given')
})

When('I visit homepage', () => {
    cy.visit('http://localhost:3000');
})

Then('I should see an input field for slug', () => {
    cy.get('.slug-input').should(
        "have.attr",
        "placeholder",
        "Enter a string to slugify"
    )
})
