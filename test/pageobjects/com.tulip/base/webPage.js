const { browser } = require('@wdio/globals')
const { $, $$ } = require('@wdio/globals')

class WebPage{

    async stopExecution(seconds) {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    async changeWindowtabs(windowHandleBeforClick){
        const windowHandleContainer = await browser.getWindowHandles();
        windowHandleContainer.forEach(async (currentElement) => {
            if(windowHandleBeforClick !== currentElement) {
                await browser.switchToWindow(currentElement);
                return true;
            }
        })
        return false;
    }

    async closeInactiveWindows() {
        const activeWindowHandle = await browser.getWindowHandle();
        const windowHandleContainer = await browser.getWindowHandles()
        windowHandleContainer.forEach(async (currentElement) => {
            if(currentElement !== activeWindowHandle) {
                await browser.switchToWindow(currentElement);
                await browser.closeWindow()
            }
        })
        await browser.switchToWindow(activeWindowHandle)
    }

    async validateTextFromTheWebElement(webElement, textToValidate) {
        const textFromWebElement = webElement.getText();
        return textFromWebElement === textToValidate;
    }

    async getCurrentPageURL() {
        console.log(`The current page url is ${await browser.getUrl()}`);
        return await browser.getUrl();
    }
}

module.exports = WebPage;