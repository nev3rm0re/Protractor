// spec.js

//function that randomly generates a mobile number
function nu() {
    return "" + Math.floor(Math.random() * 9)
}

function getRandomMob() {
    var n = nu();
    var m = nu();
    var l = nu();
    var p = "07" + n + n + n + m + m + m + l + l + 1;
    return p;
}

//function that allows to scroll to element and then scroll page up by 100 pixels
function scrollToLocator(elm) {
    browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    browser.executeScript('window.scrollTo(0,window.pageYOffset-100)');
    return elm;
}

//browser.sleep alias
function sleep(sec) {
    browser.sleep(sec);
}

//begining declaration of test name and variables
describe('Protractor Demo App', function () {
    var applyButton = element(by.id('apply'));
    var numberField = element(by.model('newAccount.mobile'));
    var submitButton = element(by.css('.black-button'));
    var newCustomerButton = element(by.css('[shared__path="signup"]'));
    //save and finish button blejat
    function saveAndFinish() {
        var saveAndFinishLater = element(by.css('.finish-later.ng-scope'));
        var savePinField = element(by.css('#group-pin input'));
        var saveAndExit = element(by.css('#check-pin'));
        saveAndFinishLater.click();
        savePinField.sendKeys('1234');
        saveAndExit.click();

    }

    //step 1 starts here
    var clientFirstName = element(by.model('application.client_firstname'));
    var clientSurName = element(by.model('application.client_surname'));
    var clientEmailSubmit = element(by.model('application.client_email_client_email'));
    var clientEmailConfirm = element(by.model('application.confirm_email'));
    var clientBirthdayDay = element(by.css('.form-control.day option[value="2"]'));
    var clientBirthdayMonth = element(by.css('.form-control.month option[value="2"]'));
    var clientBirthdayYear = element(by.css('.form-control.year option[value="1986"]'));
    var clientGenderButton = element(by.css('#group-gender #male'));
    var clientMaritalStatusButton = element(by.css('#group-marital #single'));
    var numberOfAdults = element(by.css('[name="client_detail_no_of_adults"] option[value="1"]'));
    var numberOfDependants = element(by.css('[name="client_detail_no_of_dependants"] option[value="1"]'));
    var clientCar = element(by.css('#group-car [name="client_detail_car"]'));
    var securityQuestion = element(by.css('#group-security [name="client_detail_security_question_id"] option[value="0"]'));
    var securityAnswer = element(by.css('#group-security [name="client_detail_security_question_answer"]'));
    var stepOneSubmitButton = element(by.css('#submit-button'));
    //step 2 starts here
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
    //STEP 4 starts here
    var adequateExplanationConf = element(by.css('[name="explanation_confirmed"]'));
    var secciConf = element(by.css('[name="secci_confirmed"]'));
    var RAAConf = element(by.css('[name="credit_agreement_confirm"]'));
    var clientPin = element(by.model('application.client_pin'));
    var applicationSubmitBtn = element(by.css('#send-application-button'));

//logic to check for #application
    /*function checkIgnore() {
     return true
     }*/

    /*  beforeEach(function () {
     /!*
     browser.driver.getCurrentUrl().then(function (url) {
     console.log('url=', url);
     var ignore = !url.contains("#application");
     console.log('ignore=', ignore);*!/
     browser.ignoreSynchronization = true;


     });
     */
//starts test on home FE url and clicks apply button
    xit('can click apply button', function () {
        browser.get('http://fe-jevgenim.myjar.local/');
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        //expect(applyButton.isPresent()).toBe(true);
        applyButton.click();

    });
//after new module opens, click the Im new customer button
    xit('can click new customer button', function () {
        browser.ignoreSynchronization = true;
        /*browser.get('http://fe-jevgenim.myjar.local/');*/
        newCustomerButton.click();


    });
//jumps on the application start page, enters random mob number and clicks submit
    xit('can enter mobile', function () {
        browser.ignoreSynchronization = false;
        browser.get('http://fe-jevgenim.myjar.local/application#/start');
        browser.waitForAngular();
        numberField.sendKeys(getRandomMob());
        console.log('mobile number used: ' + getRandomMob());
        submitButton.click();
        sleep(1000);


    });

    it('replaced initial apply from home_page', function () {
        var home_page = require('./pages/home_page.js');
        home_page.fullApply();
        sleep(1000);
    });


    xit('STEP 1 page ', function () {
        browser.ignoreSynchronization = false;
        clientFirstName.sendKeys('Peter');
        clientSurName.sendKeys('Pumpkin');
        clientEmailSubmit.sendKeys('peter@peter.com');
        clientEmailConfirm.sendKeys('peter@peter.com');
        clientBirthdayDay.click();
        clientBirthdayMonth.click();
        clientBirthdayYear.click();
        clientGenderButton.click();
        clientMaritalStatusButton.click();
        numberOfAdults.click();
        numberOfDependants.click();
        clientCar.click();
        securityQuestion.click();
        securityAnswer.sendKeys('Today');
        scrollToLocator(stepOneSubmitButton).click();
        sleep(1000);

    });
    it('testing STEP 1 from home_page', function () {
        var step_one_page = require('./pages/step_one_page.js');
        console.log("huj");
        console.log(Object.keys(step_one_page));

        for (property in step_one_page) {
            console.log(property);
            scrollToLocator()
        }

        scrollToLocator(step_one_page.typeFirstname("Jeff"));
        step_one_page.typeFirstname('Jeff');
        step_one_page.typeSurname('Musikov');
        step_one_page.typeEmailSubmit('here@now.com');
        step_one_page.typeEmailConfirm('here@now.com');
        step_one_page.clickBirthdayDay('2');
        step_one_page.clickBirthdayMonth('3');
        step_one_page.clickBirthdayYear('1985');
        step_one_page.clickGenderMale();
        step_one_page.clickMaritalStatusSingle();
        step_one_page.clickNumberOfAdults(2);
        step_one_page.clickNumberOfDependants(1);
        step_one_page.clickClientCarYes();
        step_one_page.clickSecurityQuestion(0);
        scrollToLocator(stepOneSubmitButton);
        step_one_page.typeSecurityAnswer('Today');
        step_one_page.clickSubmitBtn();
        sleep(1000);





    });

    xit('Step 2 page', function () {
        browser.ignoreSynchronization = false;
        incomeForm.click();
        scrollToLocator(jobSeekerAllowanceIB).click();
        jobSeekerAllowanceCB.click();
        incomeDay.click();
        incomeMonth.click();
        incomeYear.click();
        monthlyIncome.click();
        incomeMethod.click();
        scrollToLocator(incomeFrequency).click();
        rentAmount.click();
        clientCommitments.sendKeys('0');
        clientCurrentLoans.click();
        clientExpenses.sendKeys('0');
        scrollToLocator(stepOneSubmitButton).click();
    });
    it('testing STEP 2 from step_two_page', function () {
        var step_two_page = require('./pages/step_two_page.js');
        step_two_page.clickIncomeForm(3);
        scrollToLocator(jobSeekerAllowanceIB);
        step_two_page.clickBenefit(212);
        step_two_page.clickincomeDay('6');
        step_two_page.clickincomeMonth('3');
        step_two_page.clickincomeYear('2017');
        step_two_page.clickMonthlyIncome('22');
        step_two_page.clickIncomeMethod('bank_transfer');
        scrollToLocator(incomeFrequency);
        step_two_page.clickIncomeFrequency('specific_day_of_month');
        step_two_page.clickRentAmount(1);
        step_two_page.typeCommitments(0);
        step_two_page.clickCurrentLoans(0);
        step_two_page.typeExpenses(0);
        scrollToLocator(stepOneSubmitButton).click();


    });

    xit('STEP 3 page', function () {
        browser.ignoreSynchronization = false;
        nameOnAccount.sendKeys('Peter Pumpkin');
        bankName.sendKeys('HSBC');
        bankAccountNumber.sendKeys('12345678');
        bankSortCode.sendKeys('123456');
        scrollToLocator(cardHolderName).sendKeys('Peter Pumpkin');
        debitCardType.click();
        debitCardNumber.click();
        debitCardNumber.sendKeys('4100000000000000');
        debitCardCVV.click();
        debitCardCVV.sendKeys('111');
        expiryMonth.click();
        expiryYear.click();
        scrollToLocator(residentalStatus);
        postCodeEntryField.sendKeys('w44be');
        postCodeFindBtn.click();
        clientFullAddress.click();
        timeAtAddress.click();
        residentalStatus.click();
        scrollToLocator(stepOneSubmitButton).click();
        sleep(1000);
        scrollToLocator(stepOneSubmitButton).click();
        sleep(1000);
        scrollToLocator(stepOneSubmitButton).click();

//attempt to make life easier with 'for', but above code works and below one doesnt :(
        /* for (var i = 1; i < 4; i++) {
         scrollToLocator(stepOneSubmitButton).click()
         }*/
    });
    it('STEP 3 from page step three', function () {
        var step_three_page = require('./pages/step_three_page.js');
        step_three_page.typeNameOnAcc('Jeff Musikov');
        step_three_page.typeBankName('HSBC');
        step_three_page.typeAccNumber('12345678');
        step_three_page.typeSortCode('123456');
        step_three_page.typeCardHolderName('Jeff Musikov');
        scrollToLocator(cardHolderName);
        step_three_page.clickCardType('2');
        step_three_page.clickCardNumber();
        //debitCardNumber.click();
        step_three_page.typeCardNumber('4100000000000000');
        step_three_page.clickCardCVV();
        step_three_page.typeCardCVV('111');
        step_three_page.clickExpiryMonth(2);
        step_three_page.clickExpiryYear(2020);
        scrollToLocator(residentalStatus);
        step_three_page.typePostCodeField('w44be');
        step_three_page.clickPostCodeFindBtn();
        step_three_page.clickClientFullAddress(2);
        step_three_page.clickTimeAtAddress(2);
        step_three_page.clickResidentalStatus(2);
        scrollToLocator(stepOneSubmitButton).click();
        sleep(1000);
        scrollToLocator(stepOneSubmitButton).click();
        sleep(1000);
        scrollToLocator(stepOneSubmitButton).click();

    });

    xit('STEP 4 continuation', function () {
        browser.ignoreSynchronization = false;
        adequateExplanationConf.click();
        scrollToLocator(secciConf).click();
        scrollToLocator(RAAConf).click();
        scrollToLocator(clientPin).click();
        clientPin.sendKeys('1234');
        applicationSubmitBtn.click();

    });

    it('STEP 4 with page step four', function () {
        var step_four_page = require('./pages/step_four_page.js');
        step_four_page.clickAdequateExpl();
        scrollToLocator(secciConf);
        step_four_page.clickSecci();
        scrollToLocator(RAAConf);
        step_four_page.clickRAA();
        step_four_page.typePin('1234');
        step_four_page.clickSubmitAppBtn();

    });

    //as we used JSA benefits we should be declined at the end
    it('checks URL for declined string', function () {
        sleep(4000);
        expect(browser.getCurrentUrl()).toContain("declined");
    });

});



