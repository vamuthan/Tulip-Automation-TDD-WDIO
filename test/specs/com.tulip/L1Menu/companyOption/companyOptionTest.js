const { assert, expect } = require("chai");
const HomePage = require("../../../../pageobjects/com.tulip/homeModule/homePage");
const Careerpage = require('../../../../pageobjects/com.tulip/carrersModule/carrersPage');
const BambooHRCareerPage = require("../../../../pageobjects/com.tulip/carrersModule/bambooHRCareerPage");
const testData = require("../../../resources/testData.json");
const jobCountTestData = testData.jobCountTestData;

describe("Job opening validation", () => {
    jobCountTestData.forEach(({jobCount, pageURLContent, tableHeadingValue}) => {
        it(`should search and validate job openings on Carrers page`, async() => {
            const homePage = new HomePage();
            assert((await homePage.naviateToCarrersPage()).includes(pageURLContent))
            const careerPage = new Careerpage();
            assert((await careerPage.navigateToBambooHRPage()).includes(pageURLContent));
            const bambooHRCareerPage = new BambooHRCareerPage();
            assert.strictEqual(await bambooHRCareerPage.getTableHeading(), tableHeadingValue);
            assert.strictEqual(await bambooHRCareerPage.getAvaliableJobCount(), jobCount)
        })
    })
})