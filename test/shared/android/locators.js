class FrameLocators{

    getbyUIAutomator(element)
    {
        return $(`UiSelector().text("${element}")`);
    }
}
module.exports = new FrameLocators();