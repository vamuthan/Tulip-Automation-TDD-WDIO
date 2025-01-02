const { assert, expect } = require("chai");
const HomePage = require("../../../../pageobjects/com.tulip/homeModule/homePage");
const PartnerPage = require("../../../../pageobjects/com.tulip/ecoSystemModule/partnerPage");
const RetailExellencePage = require("../../../../pageobjects/com.tulip/ecoSystemModule/retailExcellencePage");
const SecurityAndIntegratorsPage = require("../../../../pageobjects/com.tulip/ecoSystemModule/securityAndIntegratorsPage");
const testData = require("../../../resources/testData.json");
const partnersTestData = testData.partnersTestData;
const securityAndIntegratorsTestData = testData.securityAndIntegratorsTestData;
const retailExcellenceTestData = testData.retailExcellenceTestData;

describe("Partners module", () => {

    partnersTestData.forEach(({pageURLContent}) => {
        it("should validate all the partner information", async() => {
            const homePage = new HomePage();
            assert((await homePage.navigateToPartnersPage()).includes(pageURLContent));
            const partnerPage = new PartnerPage();
            assert(await partnerPage.readStrategicPartenerData(), true);
            assert(await partnerPage.readTechnologyPartenrData(), true);
            assert(await partnerPage.readSystemIntegratorsAndConsultantsData(), true);
        })
    }),
    
    securityAndIntegratorsTestData.forEach(({pageURLContent, textContainer, extensibilityHeadingValue, 
        securityHeadingValue}) => {
        it("should valiadte all the Security and Integrators information", async() => {
            const homePage = new HomePage();
            assert((await homePage.navigateToSecurityAndIntegratorsPage()).includes(pageURLContent));
            const securityAndIntegratorsPage = new SecurityAndIntegratorsPage();
            assert.deepEqual(await securityAndIntegratorsPage.getIntegrationsFeaturesList(), textContainer);
            assert(await securityAndIntegratorsPage.getExtensibilitySectionHeaderText(), extensibilityHeadingValue);
            assert(await securityAndIntegratorsPage.getSecuritySectionHeaderText(), securityHeadingValue);
        })
    }),

    retailExcellenceTestData.forEach(({pageURLContent, subHeadingContainer, headingHeaderText}) => {
        it("should validate all the Retail Excellence information", async() => {
            const homePage = new HomePage();
            assert((await homePage.navigateToRetailExcellencePage()).includes(pageURLContent));
            const retailExcellencePage = new RetailExellencePage();
            assert.deepEqual(await retailExcellencePage.getSubHeadingElementList(), subHeadingContainer);
            assert(await retailExcellencePage.getHeaderText(), headingHeaderText);
        })
    })
})