describe('iOS Scenario', () => {
    it('click element', async () => {
        await $('~Text Button').click();
    });
    it('send values', async () => {
        await $(`-ios class chain:**/XCUIElementTypeTextField[\`name == "Text Input"\`]`).addValue("sd");
    });
})
