Cypress.Commands.add('loginTestApp', () => {
    cy.request({
        method: 'POST',
        url: 'http://test-backend.koncikowski.pl/api/users/login',
        body: {
            user: {
                email: 'k@w.pl',
                password: 'pastele',
            }
        }
    })
        .then((resp) => {
            window.localStorage.setItem('jwt', resp.body.user.token)
        })
})
