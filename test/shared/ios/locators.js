class FrameLocators{

    getbyiOSClassChain(element)
    {
        return $(`-ios class chain:**/XCUIElementTypeTextField[\`name == "${element}"\`]`);
    }
    getbyiOSPredicateString(element)
    {
        return $(`-ios predicate string:type == "${element}"`);
    }
    getbyAccessiblityID(elements)
    {
        return $(`~${elements}`);
    }
}

module.exports = new FrameLocators();



