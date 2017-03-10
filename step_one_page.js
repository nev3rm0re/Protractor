/**
 * Created by jevgenim on 28/02/17.
 */
var step_one_page = function () {



    this.typeFirstname = function (val) {
        var el = element(by.model('application.client_firstname'));
        el.sendKeys(val);
        return el;
    };
    this.typeSurname = function (val) {
        element(by.model('application.client_surname')).sendKeys(val);
    };
    this.typeEmailSubmit = function (val) {
        element(by.model('application.client_email_client_email')).sendKeys(val);
    };
    this.typeEmailConfirm = function (val) {
        element(by.model('application.confirm_email')).sendKeys(val);
    };
    this.clickBirthdayDay = function (index) {
        element(by.css('.form-control.day')).$('option[value="' + index + '"]').click();
    };
    this.clickBirthdayMonth = function (index) {
        element(by.css('.form-control.month')).$('option[value="' + index + '"]').click();
    };
    this.clickBirthdayYear = function (index) {
        element(by.css('.form-control.year')).$('option[value="' + index + '"]').click();
    };
    this.clickGenderMale = function () {
        element(by.css('#group-gender #male')).click();
    };
    this.clickGenderFemale = function () {
        element(by.css('#group-gender #female')).click();
    };
    this.clickMaritalStatusSingle = function () {
        element(by.css('#group-marital #single')).click();
    };
    this.clickNumberOfAdults = function (index) {
        element(by.css('[name="client_detail_no_of_adults"]')).$('option[value="' + index + '"]').click();
    };
    this.clickNumberOfDependants = function (index) {
        element(by.css('[name="client_detail_no_of_dependants"]')).$('option[value="' + index + '"]').click();
    };
    this.clickClientCarYes = function () {
        element(by.css('#group-car [name="client_detail_car"]')).click();
    };
    this.clickSecurityQuestion = function (index) {
        element(by.css('#group-security [name="client_detail_security_question_id"]')).$('option[value="' + index + '"]').click();
    };
    this.typeSecurityAnswer = function (val) {
        element(by.css('#group-security [name="client_detail_security_question_answer"]')).sendKeys(val);
    };
    this.clickSubmitBtn = function () {
        element(by.css('#submit-button')).click();
    };  
   

   

};
module.exports = new step_one_page();