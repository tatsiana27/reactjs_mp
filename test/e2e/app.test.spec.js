describe('Index page', () => {
    beforeEach(() => {
        browser.url('/');
    });

    it('Should have correct title', () => {
        const title = browser.getTitle();

        title.should.equal('React App');
    })
});