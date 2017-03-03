/**
 * Created by jevgenim on 16/02/17.
 */
describe('sandbox fun', function () {
    var loginBtn = element(by.css('top-bar-button-login.nav-desktop'));
    var mobileLoginField = element(by.css('fe-lib-forms__username-input input'));
    var mobilePinField = element(by.css('fe-lib-forms__pin-input input'));
    var mobileFormLoginButton = element(by.css('shared__action-button.login a'));
    var clientEmailConfirm = element(by.model('application.confirm_email'));
    var stepOneSubmitButton = element(by.css('#submit-button'));
    //STEP 2 starts here
    var incomeForm = element(by.css('[name="stepIncomeForm"] option[value="3"]'));
    var jobSeekerAllowanceCB = element(by.css('[name="benefit_id"][value="212"]'));
    var jobSeekerAllowanceIB = element(by.css('[name="benefit_id"][value="213"]'));
    var incomeDay = element(by.css('.day option[value="10"]'));
    var incomeMonth = element(by.css('.month option[value="2"]'));
    var incomeYear = element(by.css('.year option[value="2017"]'));
    var monthlyIncome = element(by.css('[name="client_employment_monthly_income"] option[value="22"]'));
    var incomeMethod = element(by.css('#group-payment_method #bank_transfer'));
    var incomeFrequency = element(by.css('#group-payment_frequency #specific_day_of_month'));
    var rentAmount = element(by.css('[name="client_detail_home_mortgage_rent"] option[value="1"]'));
    var clientCommitments = element(by.css('[name="client_detail_monthly_credit_repayments"]'));
    var clientCurrentLoans = element(by.css('[name="client_employment_current_loans"] option[value="0"]'));
    var clientExpenses = element(by.css('[name="client_detail_other_monthly_expenses"]'));
    //STEP 3 starts here
    var nameOnAccount = element(by.css('[name="client_bank_holder_name"]'));
    var bankName = element(by.css('[name="client_bank_bank_name"]'));
    var bankAccountNumber = element(by.css('[name="client_bank_account"]'));
    var bankSortCode = element(by.css('[name="client_bank_sortcode"]'));
    var cardHolderName = element(by.css('[name="client_card_holder_name"]'));
    var debitCardType = element(by.css('[name="client_card_card_type"] option[value="2"]'));
    var debitCardNumber = element(by.css('[name="client_card_number"]'));
    var debitCardCVV = element(by.css('[name="client_card_cvv"]'));
    var expiryMonth = element(by.css('.month option[value="2"]'));
    var expiryYear = element(by.css('.year option[value="2020"]'));
    var postCodeEntryField = element(by.css('[name="client_home_address_postcode"]'));
    var postCodeFindBtn = element(by.css('#find_address_button'));
    var clientFullAddress = element(by.css('[name="client_home_address"] option[value="2"]'));
    var timeAtAddress = element(by.css('[name="client_home_address_time_at_address"] option[value="2"]'));
    var residentalStatus = element(by.css('[name="client_detail_residential_status"] option[value="2"]'));


    it('can login', function () {
        browser.get('http://fe-jevgenim.myjar.local/');
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        loginBtn.click();
        mobileLoginField.sendKeys('07777222331');
        mobilePinField.sendKeys('1234');
        mobileFormLoginButton.click();
        browser.sleep(1000);


    });

    /* it('step 2 continuation', function () {
     browser.ignoreSynchronization = false;
     browser.get('http://fe-jevgenim.myjar.local/application#/income');
     browser.driver.sleep(3000);
     clientEmailConfirm.sendKeys('peter@peter.com');
     browser.executeScript('window.scrollTo(0,window.pageYOffset+500)').then(function () {
     stepOneSubmitButton.click();
     browser.driver.sleep(5000);
     incomeForm.click();
     browser.executeScript('window.scrollTo(0,window.pageYOffset+300)').then(function () {
     jobSeekerAllowanceCB.click();
     jobSeekerAllowanceIB.click();
     });
     incomeDay.click();
     incomeMonth.click();
     incomeYear.click();
     monthlyIncome.click();
     incomeMethod.click();
     incomeFrequency.click();
     rentAmount.click();
     clientCommitments.sendKeys('0');
     clientCurrentLoans.click();
     clientExpenses.sendKeys('0');
     browser.executeScript('window.scrollTo(0,window.pageYOffset+500)').then(function () {
     stepOneSubmitButton.click();
     });
     browser.driver.sleep(5000);
     });*/
    it('Step 3 continutation', function () {
        browser.ignoreSynchronization = false;
        browser.get('http://fe-jevgenim.myjar.local/application#/income');
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,window.pageYOffset+1300)').then(function () {
            stepOneSubmitButton.click();
        });
        nameOnAccount.sendKeys('Peter Pumpkin');
        bankName.sendKeys('HSBC');
        bankAccountNumber.sendKeys('12345678');
        bankSortCode.sendKeys('123456');
        cardHolderName.sendKeys('Peter Pumpkin');
        browser.executeScript('window.scrollTo(0,window.pageYOffset+800)').then(function () {
            debitCardType.click();
            debitCardNumber.click();
            debitCardNumber.sendKeys('4100000000000000');
            debitCardCVV.click();
            debitCardCVV.sendKeys('111');
            expiryMonth.click();
            expiryYear.click();
        });
        browser.executeScript('window.scrollTo(0,window.pageYOffset-800)').then(function () {
            postCodeEntryField.sendKeys('w44be');
            postCodeFindBtn.click();
            clientFullAddress.click();
            timeAtAddress.click();
            residentalStatus.click();
            browser.sleep(1000);
        });
        browser.actions().mouseMove(stepOneSubmitButton).click();
       /* for (var i=1;i<4;i++) {
            browser.executeScript('window.scrollTo(0,window.pageYOffset+1300)').then(function () {
                stepOneSubmitButton.click();
            });
        }*/
        browser.sleep(10000);


    });
});