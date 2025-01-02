const { assert, expect } = require("chai");
const HomePage = require("../../../../pageobjects/com.tulip/homeModule/homePage");
const BrochurePage = require("../../../../pageobjects/com.tulip/resourcesModule/brochurePage");
const testData = require("../../../resources/testData.json");
const brochurePageTestData = testData.brochurePageTestData;

describe("Brochure Module", () => {
    brochurePageTestData.forEach(({pageURLContent, brochureTitle, brochureURLValue}) => {
        it("should validate the Brochure informations", async() => {
            const homepage = new HomePage();
            assert((await homepage.navigateToBrochurePage()).includes(pageURLContent));
            const brochurePage = new BrochurePage();
            assert(await brochurePage.getBrochureName(brochureTitle), brochureTitle);
            assert((await brochurePage.getBrochureURL(brochureTitle)).includes(brochureURLValue));
        })
    })
})