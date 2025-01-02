const { assert, expect } = require("chai");
const HomePage = require("../../../../pageobjects/com.tulip/homeModule/homePage");
const CustomerStoriesPage = require("../../../../pageobjects/com.tulip/customersModule/customerStoriesPage");
const CaseStudiesPage = require("../../../../pageobjects/com.tulip/customersModule/caseStudiesPage");
const MasterClassPage = require("../../../../pageobjects/com.tulip/customersModule/masterClassPage");
const testData = require("../../../resources/testData.json");
const viewAllCustomerStoryTestData = testData.viewAllCustomerStoryTestData;
const customerSuccessStoryTestData = testData.customerSuccessStoryTestData;
const caseStudiesTestData = testData.caseStudiesTestData;
const masterClassTestData = testData.masterClassTestData;


describe("View all Customers stories module.", () => {
    viewAllCustomerStoryTestData.forEach(({pageURLContent, filterLabel, filterText}) => {
        it("should search for specific View all customer success story publication.", async() => {
            const homePage = new HomePage();
            assert((await homePage.navigateToViewAllCustomerSuccessStoriesPage()).includes(pageURLContent));
            const customerStoriesPage = new CustomerStoriesPage();
            assert.equal(await customerStoriesPage.searchInFilter(filterLabel, filterText), true);
            assert.equal(await customerStoriesPage.getPostAvaliablity(filterLabel, filterText), true);
        })
    })
}),

describe("Customer Success stories module.", () => {
    customerSuccessStoryTestData.forEach(({pageURLContent, filterLabel, filterText}) => {
        it("should search for specific Customer Success story publication.", async() => {
            const homePage = new HomePage();
            assert((await homePage.navigateToCustomerSuccessStoriesPage()).includes(pageURLContent));
            const customerStoriesPage = new CustomerStoriesPage();
            assert.equal(await customerStoriesPage.searchInFilter(filterLabel, filterText), true);
            assert.equal(await customerStoriesPage.getPostAvaliablity(filterLabel, filterText), true);
        })
    })
}),

describe("Case Studies module", () => {
    caseStudiesTestData.forEach(({pageURLContent, postTextValue}) => {
        it("should search for specific Case Studies publication.", async() => {
            const homePage = new HomePage();
            assert((await homePage.navigateToCaseStudiesPage()).includes(pageURLContent));
            const caseStudiesPage = new CaseStudiesPage();
            assert.equal(await caseStudiesPage.getPostAvailablity(postTextValue), true);
        })  
    })
})

describe("Master Class module", () => {
    masterClassTestData.forEach(({pageURLContent, postTextValue}) => {
        it("should search for specific Master Class publication.", async() => {
            const homePage = new HomePage();
            assert((await homePage.navigateToMasterClassPage()).includes(pageURLContent));
            const masterClassPage = new MasterClassPage()
            assert(await masterClassPage.getPostAvailability(postTextValue), true);
        })
    })
})