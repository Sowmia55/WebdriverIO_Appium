const FrameLocator = require("../ios/locators")

class ReuseMethods{

    async clickTextbox(element)
    {
        FrameLocator.getbyAccessiblityID(element).click();
    }
    async enterValue(element)
    {
        FrameLocator.getbyiOSClassChain(element).addValue("sd");  
    }
}
module.exports = new ReuseMethods();