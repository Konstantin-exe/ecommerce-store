// E2E: Add to cart, change quantity and remove from cart
describe('cart', () => {
  it('add a product to the cart', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="homeHead"]').click();
    cy.get('img[data-cy="shopItem"]').first().click();
    cy.get('button[data-cy="addToCart"]').click();
    cy.get('img[data-cy="cartIcon"]').click();
    cy.get('button[data-cy="increaseQuantity"]').click();
    cy.get('button[data-cy="decreaseQuantity"]').click();
    cy.get('button[data-cy="deleteItem"]').click();
  });
});
