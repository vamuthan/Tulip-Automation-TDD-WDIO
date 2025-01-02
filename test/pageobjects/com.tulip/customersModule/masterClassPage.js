const { browser, $, $$ } = require("@wdio/globals")
const HomePage = require("../homeModule/homePage")

class MasterClassPage extends HomePage{
    
    get postHeaderContainer(){
        return $$(`div > article > div > h3 > a`)
    }

    get emailAddressInputField(){
        return $$(`input[name='Email']`)[1]
    }

    async getPostAvailability(postHeaderText){
        for (let i = 0 ; i < (await this.postHeaderContainer).length ; i++) {
            const collectedPostWebElement = await this.postHeaderContainer[i];
            const collectedPostHeadingText = await this.postHeaderContainer[i].getText();
            if(collectedPostHeadingText === postHeaderText){
                await collectedPostWebElement.waitForClickable();
                await collectedPostWebElement.click();
                await this.emailAddressInputField.scrollIntoView();
                return this.emailAddressInputField.isDisplayed();
            }
        }
        return false;
    }
}

module.exports = MasterClassPage;