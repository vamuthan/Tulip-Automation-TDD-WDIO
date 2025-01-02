const { browser, $, $$ } = require("@wdio/globals")
const HomePage = require("../homeModule/homePage")

class BrochurePage extends HomePage{

    get nextPageButton(){
        return $(`a[class='page-numbers next']`)
    }

    get previousPageButton(){
        return $(`a[class='page-numbers prev']`)
    }

    get pageOneBrochureTitleContainer(){
        return $$(`h3 > a[href]`)
    }

    get pageTwoBrochureTitleContainer(){
        return $$(`h3 > a[href]`)
    }

    async navigateToNextPage(){
        await this.nextPageButton.scrollIntoView()
        await this.nextPageButton.waitForClickable()
        await this.nextPageButton.click();
    }

    async navigateToPreviousPage(){
        await this.previousPageButton.scrollIntoView();
        await this.previousPageButton.waitForClickable();
        await this.previousPageButton.click();
    }

    async getBrochureURL(brochureTitle){
        for (let i = 0 ; i < (await this.pageOneBrochureTitleContainer).length ; i++){
            const currentElement = await this.pageOneBrochureTitleContainer[i];
            const currentElementText = await this.pageOneBrochureTitleContainer[i].getText();
            if(currentElementText === brochureTitle){
                await currentElement.scrollIntoView();
                let windowHandleBeforeClick = await browser.getWindowHandle();
                await currentElement.click();
                await this.changeWindowtabs(windowHandleBeforeClick);
                await this.stopExecution(2);
                return await this.getCurrentPageURL();
            }
        }
        await this.navigateToNextPage();
        for (let i = 0 ; i < (await this.pageTwoBrochureTitleContainer).length ; i++){
            const currentElement = await this.pageTwoBrochureTitleContainer[i];
            const currentElementText = await this.pageTwoBrochureTitleContainer[i].getText();
            if(currentElementText === brochureTitle){
                await currentElement.scrollIntoView();
                await currentElement.waitForClickable();
                await currentElement.click();
                await this.stopExecution(2);
                return await this.getCurrentPageURL();
            }
        }
        return null;
    }

    async getBrochureName(brochureTitle){
        for (let i = 0 ; i < (await this.pageOneBrochureTitleContainer).length ; i++){
            const currentElement = await this.pageOneBrochureTitleContainer[i];
            const currentElementText = await this.pageOneBrochureTitleContainer[i].getText();
            if(currentElementText == brochureTitle){
                await currentElement.scrollIntoView();
                return currentElementText;
            }
        }
        await this.navigateToNextPage();
        for(let i = 0 ; i < (await this.pageTwoBrochureTitleContainer).length ; i++){
            const currentElement = await this.pageTwoBrochureTitleContainer[i];
            const currentElementText = await this.pageTwoBrochureTitleContainer[i].getText();
            if(currentElementText === brochureTitle){
                await currentElement.scrollIntoView();
                return await currentElementText;
            }
        }
        await this.navigateToPreviousPage();
        return null;
    }

}

module.exports = BrochurePage;