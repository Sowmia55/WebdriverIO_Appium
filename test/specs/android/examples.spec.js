export { }

describe('Description of Scenario - Login', () => {
    before(() => {
        console.log("@before")
    });
    it('Step 1 - Enter Username', async() => {
        console.log("@Step1")
    });
    it('Step 2 - Enter Password', async() => {
        console.log("@Step2")
    });
    it('Step 3 - Tap on Login button', async() => {
        console.log("@Step3")
    });
    after(() => {
        console.log("@after")
    });
});
