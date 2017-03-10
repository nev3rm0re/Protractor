/**
 * Created by jevgenim on 01/03/17.
 */
var step_three_page = function () {   
   

    this.typeNameOnAcc = function (value) {
        element(by.css('[name="client_bank_holder_name"]')).sendKeys(value);
    };
    this.typeBankName = function (value) {
        element(by.css('[name="client_bank_bank_name"]')).sendKeys(value);
    };
    this.typeAccNumber = function (value) {
        element(by.css('[name="client_bank_account"]')).sendKeys(value);
    };
    this.typeSortCode = function (value) {
        element(by.css('[name="client_bank_sortcode"]')).sendKeys(value);
    };
    this.typeCardHolderName = function (value) {
        element(by.css('[name="client_card_holder_name"]')).sendKeys(value);
    };
    this.clickCardType = function (index) {
        element(by.css('[name="client_card_card_type"] option[value="' + index + '"]')).click();
    };
    this.clickCardNumber = function () {
        element(by.css('[name="client_card_number"]')).click();
    };
    this.typeCardNumber = function (value) {
        element(by.css('[name="client_card_number"]')).sendKeys(value);
    };
    this.clickCardCVV = function () {
        element(by.css('[name="client_card_cvv"]')).click();
    };
    this.typeCardCVV = function (value) {
        element(by.css('[name="client_card_cvv"]')).sendKeys(value);
    };
    this.clickExpiryMonth = function (val) {
        element(by.css('.month')).$('option[value="' + val + '"]').click();
    };
    this.clickExpiryYear = function (val) {
        element(by.css('.year')).$('option[value="' + val + '"]').click();
    };
    this.typePostCodeField = function (value) {
        element(by.css('[name="client_home_address_postcode"]')).sendKeys(value);
    };
    this.clickPostCodeFindBtn = function () {
        element(by.css('#find_address_button')).click();
    };
    this.clickClientFullAddress = function (val) {
        element(by.css('[name="client_home_address"]')).$('option[value="' + val + '"]').click();
    };
    this.clickTimeAtAddress = function (val) {
        element(by.css('[name="client_home_address_time_at_address"]')).$('option[value="' + val + '"]').click();
    };
    this.clickResidentalStatus = function (val) {
        element(by.css('[name="client_detail_residential_status"]')).$('option[value="' + val + '"]').click();
    };



};
module.exports = new step_three_page();
