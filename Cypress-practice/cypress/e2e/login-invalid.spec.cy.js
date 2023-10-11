describe("Prueba de inicio de sesión con credenciales inválidas", () => {
    beforeEach(() => {
      cy.visit("http://uitestingplayground.com/sampleapp");
    });
  
    it("Iniciar sesión con credenciales inválidas", () => {
      cy.fixture("credenciales-invalidas.json").then((credenciales) => {
        cy.get('input[name="UserName"]').type(credenciales.credencial3.username);
        cy.get('input[name="Password"]').type(credenciales.credencial3.password);
        cy.get('button[class="btn btn-primary"]').click();
  
        // Agrega aquí las aserciones para verificar el comportamiento esperado después del inicio de sesión.
        cy.get('label').should('contain', 'Invalid');

        cy.get('input[name="UserName"]').type(credenciales.credencial4.username);
        cy.get('input[name="Password"]').type(credenciales.credencial4.password);
        cy.get('button[class="btn btn-primary"]').click();
  
        // Agrega aquí las aserciones para verificar el comportamiento esperado después del inicio de sesión.
        cy.get('label').should('contain', 'Invalid');
        
      });
    });
  });
  