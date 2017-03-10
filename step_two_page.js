/**
 * Created by jevgenim on 28/02/17.
 */
var step_two_page = function () {


    this.clickIncomeForm = function (index) {
        element(by.css('[name="stepIncomeForm"]')).$('option[value="' + index + '"]').click();
    };
    this.clickBenefit = function (index) {
        element(by.css('[name="benefit_id"][value="' + index + '"]')).click();
    };
    this.clickincomeDay = function (index) {
        element(by.css('.day')).$('option[value="' + index + '"]').click();
    };
    this.clickincomeMonth = function (index) {
        element(by.css('.month')).$('option[value="' + index + '"]').click();
    };
    this.clickincomeYear = function (index) {
        element(by.css('.year')).$('option[value="' + index + '"]').click();
    };
    this.clickMonthlyIncome = function (index) {
        element(by.css('[name="client_employment_monthly_income"]')).$('option[value="' + index + '"]').click();
    };    
    this.clickIncomeMethod = function (id) {
        element(by.css('#' + id)).click();
    };   
    this.clickIncomeFrequency = function (id) {
        element(by.css('#' + id)).click();
    };
    this.clickRentAmount = function (val) {
        element(by.css('[name="client_detail_home_mortgage_rent"]')).$('option[value="' + val + '"]').click();
    };
    this.typeCommitments = function (val) {
        element(by.css('[name="client_detail_monthly_credit_repayments"]')).sendKeys(val);
    };
    this.clickCurrentLoans = function (val) {
        element(by.css('[name="client_employment_current_loans"]')).$('option[value="' + val + '"]').click();
    };
    this.typeExpenses = function (val) {
        element(by.css('[name="client_detail_other_monthly_expenses"]')).sendKeys(val);
    };


};
module.exports = new step_two_page();