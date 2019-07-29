describe('Add article', function () {
    beforeEach(() => {
        cy.loginTestApp()
    });

    it('should add an article', function () {
        // given
        const articleTitle = 'Title1';
        const articleText = 'Text of the article';

        // when
        cy.visit('http://test-app.koncikowski.pl/editor')
        cy.get('form > fieldset > fieldset:nth-child(1) > input')
            .type(articleTitle);

        cy.get('form > fieldset > fieldset:nth-child(2) > input')
            .type('Text1');

        cy.get('form > fieldset > fieldset:nth-child(3) > textarea')
            .type(articleText);

        cy.get('form > fieldset > fieldset:nth-child(4) > input')
            .type('Tag1{enter}')
            .type('Tag2{enter}');

        cy.get('form > fieldset > button').click();

        // then
        cy.get('.article-page .banner .container > h1')
            .should('have.text', articleTitle);
        cy.get('.article-page .container.page .article-content p')
            .should('have.text', articleText);
    })
})