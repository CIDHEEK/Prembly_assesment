class Product
{


    
    assertAscendingOrder()
    {
        cy.get('[data-test="inventory-item-name"]').then($productNames => {
            const productNames = $productNames.map((index, elem) => Cypress.$(elem).text()).get();
      
            // Check if product names are sorted in ascending order
            const sortedProductNames = [...productNames].sort((a, b) => a.localeCompare(b));
      
            expect(productNames).to.deep.equal(sortedProductNames)
         });
    }

    assertDescendingOrder()
    {
        cy.get('[data-test="inventory-item-name"]').then($productNames => {
            const productNames = $productNames.map((index, elem) => Cypress.$(elem).text()).get();
      
            // Check if product names are sorted in descending order
            const sortedProductNames = [...productNames].sort((a, b) => b.localeCompare(a));
      
            expect(productNames).to.deep.equal(sortedProductNames)
         });
    }

    sortToDescending()
    {
        cy.get('[data-test="product-sort-container"]').select('za')
    }

}
export default Product;