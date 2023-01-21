const FrameLocator = require("../../shared/ios/locators");
const ReuseMethods = require("../../shared/ios/methods")

describe('Reuseable Locators', () => {
    it('click element', async () => {
       // await $('~Text Button').click();
       await FrameLocator.getbyAccessiblityID("Text Button").click();  
    });
    it('send values', async () => {
       // await $(`-ios class chain:**/XCUIElementTypeTextField[\`name == "Text Input"\`]`).addValue("sd");
       await FrameLocator.getbyiOSClassChain("Text Input").addValue("sd");            
    });
})

describe.only('Reuseable Methods', () => {
   it('click element & send values', async () => {
      await ReuseMethods.clickTextbox("Text Button"); 
   });
   it('send values', async () => {
      await ReuseMethods.enterValue("Text Input");
   });
})
