const { browser, $, $$ } = require("@wdio/globals")
const HomePage = require("../homeModule/homePage")

class CaseStudiesPage extends HomePage{

    get caseStudiesHeadingContainer(){
        return $$(`div > article > div > h3 > a`)
    }
    get emailAdressInputField(){
        return $(`input[id='Email']`)
    }

    async getPostAvailablity(postHeadingText){
        for (let i = 0 ; i < (await this.caseStudiesHeadingContainer).length; i++){
            const collectedWebElement = await this.caseStudiesHeadingContainer[i];
            const collectedHeadingText = await this.caseStudiesHeadingContainer[i].getText();
            if(collectedHeadingText === postHeadingText){
                await collectedWebElement.waitForClickable();
                await collectedWebElement.click();
                await this.emailAdressInputField.scrollIntoView();
                return this.emailAdressInputField.isDisplayed();
            }
        }
        return false;
    }
}

module.exports = CaseStudiesPage;