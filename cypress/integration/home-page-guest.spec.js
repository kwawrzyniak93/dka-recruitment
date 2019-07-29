describe('Home page as guest', function () {
    it('should redirect to login page when adding to favorites', function () {
        // given
        const loginUrl = '/login';

        // when
        cy.visit('http://test-app.koncikowski.pl/')

        cy.get('.article-preview:first-child > .article-meta > .pull-xs-right > button') 
            .click();

        // then
        cy.location().should((location) => {
            expect(location.pathname).to.eq(loginUrl)
        })
    })
})