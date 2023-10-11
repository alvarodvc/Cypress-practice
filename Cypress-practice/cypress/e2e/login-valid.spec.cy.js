describe("Prueba de inicio de sesión con credenciales válidas", () => {
    beforeEach(() => {
      cy.visit("http://uitestingplayground.com/sampleapp");
    });
  
    it("Iniciar sesión con credenciales válidas", () => {
      cy.fixture("credenciales-validas.json").then((credenciales) => {
        cy.get('input[name="UserName"]').type(credenciales.credencial1.username);
        cy.get('input[name="Password"]').type(credenciales.credencial1.password);
        cy.get('button[class="btn btn-primary"]').click();
  
        // Agrega aquí las aserciones para verificar el comportamiento esperado después del inicio de sesión.
        cy.get('label').should('contain', 'Welcome');

        cy.get('button[class="btn btn-primary"]').click();
        
        cy.get('input[name="UserName"]').type(credenciales.credencial2.username);
        cy.get('input[name="Password"]').type(credenciales.credencial2.password);
        cy.get('button[class="btn btn-primary"]').click();
  
        // Agrega aquí las aserciones para verificar el comportamiento esperado después del inicio de sesión.
        cy.get('label').should('contain', 'Welcome');
      });
    });
  });
  