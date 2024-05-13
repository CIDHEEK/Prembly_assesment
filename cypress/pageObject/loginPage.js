class Login
{
    

    
    setUserName(username)
    {
        cy.get('[data-test="username"]').click().type(username)
    }

    setPassword(password)
    {
        cy.get('[data-test="password"]').click().type(password)
    }

    loginBtn()
    {
        cy.get('[data-test="login-button"]').click()
    }

}
export default Login;