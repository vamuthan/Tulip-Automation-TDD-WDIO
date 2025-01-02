const CarrersPage = require('./carrersPage');
const { browser } = require('@wdio/globals')
const { $ }  = require('@wdio/globals')
const { $$ } = require('@wdio/globals')

class BambooHRCareerPage extends CarrersPage{

    get currrentOpeningContainer(){
        return $$('ul > div')
    }

    get headingElement(){
        return $('h3')
    }

    async getAvaliableJobCount(){
        try{
            return await this.currrentOpeningContainer.length;
        }
        catch(error) {
            console.log(error.message)
            return 0;
        }
    }

    async getTableHeading(){
        return await this.headingElement.getText();
    }
}

module.exports = BambooHRCareerPage;