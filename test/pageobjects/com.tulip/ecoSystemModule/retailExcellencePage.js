const { browser, $, $$ } = require("@wdio/globals")
const HomePage = require("../homeModule/homePage")

class RetailExellencePage extends HomePage{

    get headingElement(){
        return $(`div[class='page-content'] > div > section:nth-child(3) > div > div:nth-child(2) > div > 
            div > div > h2 > span`)
    }

    get subHeadingElementOne(){
        return $(`div[class='page-content'] > div > section:nth-child(3) > div > div:nth-child(2) > div > 
            section:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > h2 > span`)
    }

    get subHeadingElementTwo(){
        return $(`div[class='page-content'] > div > section:nth-child(3) > div > div:nth-child(2) > div > 
            section:nth-child(2) > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > h2 > span`)
    }

    get subHeadingElementThree(){
        return $(`div[class='page-content'] > div > section:nth-child(3) > div > div:nth-child(2) > div > 
            section:nth-child(3) > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > h2 > span`)
    }

    get subHeadingElementFour(){
        return $(`div[class='page-content'] > div > section:nth-child(3) > div > div:nth-child(2) > div > 
            section:nth-child(3) > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > h2 > span`)
    }

    async getHeaderText(){
        return await this.headingElement.getText();
    }

    async getSubHeadingElementList(){
        await this.headingElement.scrollIntoView();
        let resultSubHeadingElementTextContainer = [];
        resultSubHeadingElementTextContainer.push(await this.subHeadingElementOne.getText());
        resultSubHeadingElementTextContainer.push(await this.subHeadingElementTwo.getText());
        resultSubHeadingElementTextContainer.push(await this.subHeadingElementThree.getText());
        resultSubHeadingElementTextContainer.push(await this.subHeadingElementFour.getText());
        return resultSubHeadingElementTextContainer;
    }
}

module.exports = RetailExellencePage;