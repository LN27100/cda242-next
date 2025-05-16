/* eslint-disable */
// Désactive ESLint pour éviter les erreurs de linting dans le dépôt Next.js.
// Si vous utilisez ESLint sur votre projet, nous recommandons d'installer le plugin ESLint Cypress à la place :
// https://github.com/cypress-io/eslint-plugin-cypress

describe("Navigation", () => {
  it("devrait naviguer vers la page à propos", () => {
    // Commencer depuis la page d'index
    cy.visit("http://localhost:3000/home");

    // Trouver un lien avec un attribut href contenant "about" et cliquer dessus
    cy.get('a[href*="about"]').click();

    // La nouvelle URL devrait inclure "/home/about"
    cy.url().should("include", "/home/about");

    // La nouvelle page devrait contenir un h1 avec "About"
    cy.get("h1").contains("About");
  });
});
