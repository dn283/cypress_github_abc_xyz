describe('abc tests', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('https://practicetestautomation.com/practice-test-login/');
    });
  
    it('PASS slogin abc', () => {
      // Enter valid username and password
      cy.get('#username').type('student');
      cy.get('#password').type('Password123');
  
      // Click the submit button
      cy.get('#submit').click();
  
      // Verify that the user is redirected to the logged-in page
      cy.url().should('include', '/logged-in-successfully/');
  
      // Verify that the success message is displayed
      cy.get('.post-title').should('be.visible').and('have.text', 'Logged In Successfully');
      cy.get('.has-text-align-center')
        .should('be.visible')
        .and('contain.text', 'Congratulations student. You successfully logged in!');
    });
  
    it('Fail login abc', () => {
      // Enter invalid username and password
      cy.get('#username').type('invalid_user');
      cy.get('#password').type('invalid_password');
  
      // Click the submit button
      cy.get('#submit').click();
  
      // Verify that the error message is displayed
      cy.get('.post-title').should('be.visible').and('have.text', 'Logged In Successfully');
      
    });
  
    it('timestamp abc', () => {
      // add timestamp to console
      cy.log(new Date().toLocaleString());
    });
  
   
  });