const { browser, $, $$ } = require("@wdio/globals")
const HomePage = require("../homeModule/homePage")

class CustomerStoriesPage extends HomePage{

    get allCustomerStoriesButton(){
        return $(`div[class='nav-filter'] > form > div > div:nth-child(1)`)
    }

    get caseStudiesButton(){
        return $(`div[class='nav-filter'] > form > div > div:nth-child(2)`)
    }

    get customerSuccessStoriesButton(){
        return $(`div[class='nav-filter'] > form > div > div:nth-child(3)`)
    }

    get masterClassButton(){
        return $(`div[class='nav-filter'] > form > div > div:nth-child(4)`)
    }

    get searchResourcesInputField(){
        return $(`div[class='nav-filter'] > div > form > div:nth-child(1) > input`)
    }

    get postFilterTagContainer(){
        return $$(`div[class='grid-items'] > div > div > div > div:nth-child(2) > a`)
    }

    get postHeadingContainer(){
        return $$(`div[class='grid-items'] > div > div > div > div:nth-child(3) > a`)
    }

    async searchInFilter(filterBy, textValue){
        switch (filterBy) {
            case "All Customer Stories":
                await this.allCustomerStoriesButton.waitForClickable();
                await this.allCustomerStoriesButton.click();
                break;
            case "Case Studies":
                await this.caseStudiesButton.waitForClickable();
                await this.caseStudiesButton.click();
                break;
            case "Customer Success Stories":
                await this.customerSuccessStoriesButton.waitForClickable();
                await this.customerSuccessStoriesButton.click();
                break;
            case "MasterClasses":
                await this.masterClassButton.waitForClickable();
                await this.masterClassButton.click();
                break;
            default:
                console.log("No filter by option found");
                break;            
        }
        await this.searchResourcesInputField.waitForDisplayed();
        await this.searchResourcesInputField.scrollIntoView();
        await this.searchResourcesInputField.setValue(textValue);
        return true;
    }

    async getPostAvaliablity(filterName, postContentName){
        for(let i = 0 ; i < (await this.postFilterTagContainer).length ; i++){
            const collectedPostFilter = await this.postFilterTagContainer[i].getText();
            const collectedPostHeader = await this.postHeadingContainer[i].getText();
            if(collectedPostFilter.includes(filterName) && collectedPostHeader.includes(postContentName)){
                return true;
            }
        }
        return false;
    } 
}

module.exports = CustomerStoriesPage;