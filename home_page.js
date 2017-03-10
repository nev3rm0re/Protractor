/**
 * Created by jevgenim on 27/02/17.
 */

var home_page = function () {


    function scrollToLocator(elm) {
        browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
        browser.executeScript('window.scrollTo(0,window.pageYOffset-100)');
    }

    function sleep(sec) {
        browser.sleep(sec);
    }

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

    this.fullApply = function () {
        browser.get('http://fe-jevgenim.myjar.local/');
        browser.ignoreSynchronization = true;
        element(by.css('shared__action-button.home#apply')).click();     
        element(by.css('[shared__path="signup"]')).click();
        browser.ignoreSynchronization = false;
        browser.get('http://fe-jevgenim.myjar.local/application#/start');
        element(by.model('newAccount.mobile')).sendKeys(getRandomMob());
        element(by.css('.black-button')).click();


    };

    function inputMob(value) {
        element(by.css('fe-lib-forms__username-input input')).sendKeys(value);
    }

    this.login = function (value) {
        element(by.css('top-bar-button-login.nav-desktop')).click();
        inputMob(value);
        element(by.css('fe-lib-forms__pin-input input')).sendKeys('1234');
        element(by.css('shared__action-button.login a')).click();

    };


};
module.exports = new home_page();
