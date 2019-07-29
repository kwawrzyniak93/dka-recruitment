describe('Profile settings', function () {
    beforeEach(() => {
        cy.loginTestApp()
    });

    function fillProfileSettingsForm(pictureURL, userName, bioText) {
        cy.visit('http://test-app.koncikowski.pl/settings')
        cy.get('form > fieldset > fieldset:nth-child(1) > input')
            .type(pictureURL);

        const userNameField = cy.get('form > fieldset > fieldset:nth-child(2) > input')
            .clear()

        if (userName == null && userName.length === 0) {
            cy.get(userNameField).type(userName);
        }

        cy.get('form > fieldset > fieldset:nth-child(3) > textarea')
            .type(bioText);

        cy.get('form > fieldset > button').click();
    }

    it('should change the username', function () {
        // given
        const pictureURL = 'https://d3iamf8ydd24h9.cloudfront.net/app/client/static/imgs/ania/ania_kolo_160.jpg';
        const bioText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
        const userName = 'testUser';

        // when
        fillProfileSettingsForm(pictureURL, userName, bioText);

        // then
        cy.get('nav.navbar ul > li:last-child > a')
            .should('have.text', userName.toLowerCase());
    })

    it('should shown a warn when username is empty', function () {
        // given
        const userName = '';

        // when
        fillProfileSettingsForm('pictureURL', userName, 'bioText');

        // then
        cy.get('.error-messages > li').should('have.text', 'username can\'t be blank')
    })
})