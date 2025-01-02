const { browser, $, $$ } = require("@wdio/globals")
const HomePage = require("../homeModule/homePage")

class PartnerPage extends HomePage{

    get strategicAllianceApple(){
        return $(`img[src*='Apple']`)
    }

    get strategicAllianceSalesForceVentures(){
        return $(`img[src*='SalesforceVentures']`)
    }

    get strategicAllianceStripe(){
        return $(`img[src*='Stripe']`)
    }
    
    get technologyPartnerAdyen(){
        return $(`div[style*='Adyen']`)
    }

    get technologyPartnerAvalara(){
        return $(`div[style*='Avalara']`)
    }

    get technologyPartnerShopify(){
        return $(`div[style*='Shopify']`)
    }

    get technologyPartnerVertex(){
        return $(`div[style*='Vertex']`)
    }

    get technologyPartnerJamf(){
        return $(`div[style*='Jamf']`)
    }

    get technologyPartnerGoogleCloud(){
        return $(`div[style*='GoogleCloud']`)
    }

    get technologyPartnerCisco(){
        return $(`div[style*='Cisco']`)
    }

    get technologyPartnerSap(){
        return $(`div[style*='SAP']`)    
    }

    get technologyPartnerZendesk(){
        return $(`div[style*='Zendesk']`)
    }

    get systemIntergratorsAndConsultantDeloitte(){
        return $(`img[src*='Deloitte']`)
    }

    get systemIntegratorsAndConsultantsDemand(){
        return $(`img[src*='Demand']`)
    }

    get systemIntegratorsAndConsultantsAcccenture(){
        return $(`img[src*='Accenture']`)
    }

    get systemIntegratorsAndConsultantsOnestep(){
        return $(`img[src*='Onestep']`)
    }

    get systemIntegratorsAndConsultantsMODO(){
        return $(`img[src*='MODO']`)
    }

    async readStrategicPartenerData(){
        await this.strategicAllianceApple.scrollIntoView();
        return await this.strategicAllianceApple.isDisplayed() && 
        await this.strategicAllianceSalesForceVentures.isDisplayed() && 
        await this.strategicAllianceStripe.isDisplayed(); 
    }

    async readTechnologyPartenrData(){
        await this.technologyPartnerAdyen.scrollIntoView();
        return await this.technologyPartnerAdyen.isDisplayed() && await this.technologyPartnerAvalara.isDisplayed() &&
        await this.technologyPartnerShopify.isDisplayed() && await this.technologyPartnerVertex.isDisplayed() && 
        await this.technologyPartnerJamf.isDisplayed() && await this.technologyPartnerGoogleCloud.isDisplayed() &&
        await this.technologyPartnerCisco.isDisplayed() && await this.technologyPartnerSap.isDisplayed() &&
        await this.technologyPartnerZendesk.isDisplayed();
    }

    async readSystemIntegratorsAndConsultantsData(){
        await this.systemIntegratorsAndConsultantsAcccenture.scrollIntoView();
        return await this.systemIntegratorsAndConsultantsAcccenture.isDisplayed() && 
        await this.systemIntergratorsAndConsultantDeloitte.isDisplayed() &&
        await this.systemIntegratorsAndConsultantsDemand.isDisplayed() &&
        await this.systemIntegratorsAndConsultantsOnestep.isDisplayed() &&
        await this.systemIntegratorsAndConsultantsMODO.isDisplayed();
    }
}

module.exports = PartnerPage;