import {USER} from '../TestData/loginData'
import Login from '../pageObject/loginPage'
import Product from '../pageObject/productPage'

const Username = '[data-test="username"]'
const Password = '[data-test="password"]'
const Filter = '[data-test="product-sort-container"]'
const ItemName = '[data-test="inventory-item-name"]'



describe('sorting', function() {
const loginPage = new Login()
const productPage = new Product()
beforeEach(() => {
   cy.visit(Cypress.env('baseUrl'))

 });

  it('Verify that the items are sorted by Name (A -> Z)', function() {

      

      loginPage.setUserName(USER.username)
     
      loginPage.setPassword(USER.password)
      
      loginPage.loginBtn()



      // Verify that the items are sorted by Name (A -> Z).
      
      productPage.assertAscendingOrder()
     
   }) 

it('Verify that the items are sorted by Name (Z -> A)', function() {

      

   loginPage.setUserName(USER.username)
  
   loginPage.setPassword(USER.password)
   
   loginPage.loginBtn()


   // Change the sorting to Name (Z -> A).

   productPage.sortToDescending()
  
    // Verify that the items are sorted by Name (Z -> A).
  
   productPage.assertDescendingOrder()
})
})