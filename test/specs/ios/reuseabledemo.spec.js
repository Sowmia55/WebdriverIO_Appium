import FrameLocator from '../../shared/ios/locators';

describe('Reuseable Locators', () => {
    it('click element', async () => {
       await FrameLocator.getbyAccessiblityID("Text Button").click();  
    });
    it('send values', async () => {
        await FrameLocator.getbyiOSClassChain("Text Input").addValue("sd");            
    });
})