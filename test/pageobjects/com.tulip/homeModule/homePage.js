const { browser } = require('@wdio/globals')
const { $, $$ }  = require('@wdio/globals')
const WebPage = require('../base/webPage.js')

class HomePage extends WebPage{

    get companyModuleButton() {
        return $(`div[data-elementor-type="header"] > div:nth-child(1) > div:nth-child(2) > div > 
            div:nth-child(2) > div > div > div div[aria-label="Company"]`);
    }

    get careerModuleButton(){
        return $$(`div[data-elementor-type='header'] > div> div > div > div > div > div > div > nav > ul > 
            li:nth-child(2) > div > div > div > div > div > div > div> div > div> div > div > ul > li`)[1]
    }

    get customersButton(){
        return $(`div[data-elementor-type='header'] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) 
            > div > div > div div[aria-label='Customers']`);
    }

    get viewAllCustomerSuccessStoriesButton(){
        return $$(`div[data-elementor-type='header'] > div> div > div > div > div > div > div > nav > ul > 
            li:nth-child(3) > div > div > div > div > div > div > div > div > div > div > div > ul > li > a`)[3]
    }

    get customerSuccessStoriesButton(){
        return $$(`div[data-elementor-type='header'] > div> div > div > div > div > div > div > nav > ul > 
            li:nth-child(3) > div > div > div > div > div > div > div > div > div > div > div > ul > li > a`)[0]
    }

    get caseStudiesPageButton(){
        return $$(`div[data-elementor-type='header'] > div> div > div > div > div > div > div > nav > ul > 
            li:nth-child(3) > div > div > div > div > div > div > div > div > div > div > div > ul > li > a`)[1]
    }

    get masterClassPageButton(){
        return $$(`div[data-elementor-type='header'] > div> div > div > div > div > div > div > nav > ul > 
            li:nth-child(3) > div > div > div > div > div > div > div > div > div > div > div > ul > li > a`)[2]
    }

    get ecoSystemButton(){
        return $(`div[data-elementor-type='header'] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > 
            div > div > div div[aria-label='Ecosystem']`)
    }

    get partnerPageButton(){
        return $$(`div[data-elementor-type='header'] > div:nth-child(1) > div > div > div > div > div > div > nav > 
            ul > li:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > ul > li > a`)[0]
    }

    get securityAndIntegrationsPageButton(){
        return $$(`div[data-elementor-type='header'] > div:nth-child(1) > div > div > div > div > div > div > nav > 
            ul > li:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > ul > li > a`)[1]
    }

    get retailExcellencePageButton(){
        return $$(`div[data-elementor-type='header'] > div:nth-child(1) > div > div > div > div > div > div > nav > 
            ul > li:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > ul > li > a`)[2]
    }

    get resourcesButton(){
        return $(`div[data-elementor-type='header'] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) 
            > div > div > div div[aria-label='Resources']`)
    }

    get brochurePageButton(){
        return $(`div[data-elementor-type='header'] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) 
            > div > div > div div[aria-label='Resources'] ~ div ul > li:nth-child(5)`)
    }

    get demoVideosButton(){
        return $(`div[data-elementor-type='header'] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) 
            > div > div > div div[aria-label='Resources'] ~ div ul > li:nth-child(3)`)
    }

    async naviateToCarrersPage() {
        await this.companyModuleButton.waitForClickable();
        await this.companyModuleButton.click();
        await this.careerModuleButton.waitForClickable();
        await this.careerModuleButton.click();
        return await this.getCurrentPageURL();
    }


    async navigateToViewAllCustomerSuccessStoriesPage(){
        await this.customersButton.waitForClickable();
        await this.customersButton.click();
        await this.viewAllCustomerSuccessStoriesButton.waitForClickable();
        await this.viewAllCustomerSuccessStoriesButton.click();
        return await this.getCurrentPageURL();
    }

    async navigateToCustomerSuccessStoriesPage(){
        await this.customersButton.waitForClickable();
        await this.customersButton.click();
        await this.customerSuccessStoriesButton.waitForClickable();
        await this.customerSuccessStoriesButton.click();
        return await this.getCurrentPageURL();
    }

    async navigateToCaseStudiesPage(){
        await this.customersButton.waitForClickable();
        await this.customersButton.click();
        await this.caseStudiesPageButton.waitForClickable();
        await this.caseStudiesPageButton.click();
        return await this.getCurrentPageURL();
    }

    async navigateToMasterClassPage(){
        await this.customersButton.waitForClickable();
        await this.customersButton.click();
        await this.masterClassPageButton.waitForClickable();
        await this.masterClassPageButton.click();
        return await this.getCurrentPageURL();
    }

    async navigateToPartnersPage(){
        await this.ecoSystemButton.waitForClickable();
        await this.ecoSystemButton.click();
        await this.partnerPageButton.waitForClickable();
        await this.partnerPageButton.click();
        return await this.getCurrentPageURL();
    }

    async navigateToRetailExcellencePage(){
        await this.ecoSystemButton.waitForClickable();
        await this.ecoSystemButton.click();
        await this.retailExcellencePageButton.waitForClickable();
        await this.retailExcellencePageButton.click();
        return await this.getCurrentPageURL();
    }

    async navigateToSecurityAndIntegratorsPage(){
        await this.ecoSystemButton.waitForClickable();
        await this.ecoSystemButton.click();
        await this.securityAndIntegrationsPageButton.waitForClickable();
        await this.securityAndIntegrationsPageButton.click();
        return await this.getCurrentPageURL();
    }

    async navigateToBrochurePage(){
        await this.resourcesButton.waitForClickable();
        await this.resourcesButton.click();
        await this.brochurePageButton.waitForClickable();
        await this.brochurePageButton.click();
        return await this.getCurrentPageURL();
    }

    async navigateToDemoVideosPage(){
        await this.resourcesButton.waitForClickable();
        await this.resourcesButton.click();
        await this.demoVideosButton.waitForClickable();
        await this.demoVideosButton.click();
        return await this.getCurrentPageURL();
    }
}

module.exports = HomePage;