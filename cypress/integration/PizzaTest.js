describe('Pizza Test', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () =>cy.get('input[name=name]')
    const topping1Input = () => cy.get('input[name=topping1]')
    const topping2Input = () => cy.get('input[name=topping2]')
    const topping3Input = () => cy.get('input[name=topping3]')
    const topping4Input = () => cy.get('input[name=topping4]')
    const specialInput = () => cy.get('input[name=special_instructions]')
    const submitInput = () => cy.get('button')
    it('check existence', () => {
        nameInput().should('exist').should('have.value','')
        topping1Input().should('exist').should('not.be.checked')
        topping2Input().should('exist').should('not.be.checked')
        topping3Input().should('exist').should('not.be.checked')
        topping4Input().should('exist').should('not.be.checked')
        specialInput().should('exist').should('have.value','')
        submitInput().should('exist')
    })

    it('checking order', () => {
        nameInput().type('Test Name').should('have.value','Test Name')
        topping1Input().check().should('be.checked')
        topping2Input().check().should('be.checked')
        topping3Input().check().should('be.checked')
        topping4Input().check().should('be.checked')
        specialInput().type('Cut into small slices').should('have.value','Cut into small slices')
        submitInput().click()
    })
})