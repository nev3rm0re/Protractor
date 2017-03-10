/**
 * Created by jevgenim on 01/03/17.
 */
var step_four_page = function () {


    this.clickAdequateExpl = function () {
        element(by.css('[name="explanation_confirmed"]')).click();
    };
    this.clickSecci = function () {
        element(by.css('[name="secci_confirmed"]')).click();
    };
    this.clickRAA = function () {
        element(by.css('[name="credit_agreement_confirm"]')).click();
    };
    this.typePin = function (val) {
        element(by.model('application.client_pin')).sendKeys(val);
    };
    this.clickSubmitAppBtn = function () {
        element(by.css('#send-application-button')).click();
    };


};
module.exports = new step_four_page();