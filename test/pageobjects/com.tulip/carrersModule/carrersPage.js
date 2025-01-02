const { browser }  = require('@wdio/globals')
const HomePage = require('../homeModule/homePage')
const { $ } = require('@wdio/globals')
class CarrersPage extends HomePage{

    get viewJobOpeningButton(){
        return $(`main[id='content'] > div > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) a`)
    }

    async navigateToBambooHRPage() {
        let originalWindowHandle = await browser.getWindowHandle();
        await this.viewJobOpeningButton.waitForClickable();
        await this.viewJobOpeningButton.click();
        await this.stopExecution(6);
        let avaliableWindowHandles = await browser.getWindowHandles();
        for (const currentValue of await avaliableWindowHandles){
            if(currentValue !== originalWindowHandle){
                await browser.switchToWindow(currentValue);
                break;
            }
        }
        return await browser.getUrl();
    }
}

module.exports = CarrersPage;