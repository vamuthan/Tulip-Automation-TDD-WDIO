const { browser, $, $$ } = require("@wdio/globals")
const HomePage = require("../homeModule/homePage")

class SecurityAndIntegratorsPage extends HomePage{

    get integrationsContentContainer(){
        return $$(`div[data-elementor-type='wp-page'] > section:nth-child(2) > div > div:nth-child(1) > div > 
            div:nth-child(4) > div > ul > li`)
    }

    get extensibilityHeadingContent(){
        return $(`div[data-elementor-type='wp-page'] > section:nth-child(3) > div > div:nth-child(2) > div > 
            div:nth-child(2) > div > h2`)
    }

    get securityHeadingContent(){
        return $(`div[data-elementor-type='wp-page'] > section:nth-child(4) > div > div:nth-child(1) > div > 
            div:nth-child(2) > div > h2`)
    }

    async getExtensibilitySectionHeaderText(){
        return await this.extensibilityHeadingContent.getText();
    }

    async getSecuritySectionHeaderText(){
        return await this.securityHeadingContent.getText();
    }

    async getIntegrationsFeaturesList(){
        let resultIntegrationsContentContainer = [];
        for (let i = 0 ; i < (await this.integrationsContentContainer).length ; i++){
            const currentElementText = await this.integrationsContentContainer[i].getText();
            resultIntegrationsContentContainer[i] = currentElementText;
        }
        return resultIntegrationsContentContainer;
    }
}

module.exports = SecurityAndIntegratorsPage;