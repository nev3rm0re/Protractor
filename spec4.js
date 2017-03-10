/**
 * Created by jevgenim on 02/03/17.
 */
describe('URL checker', function () {
    var utils = require('./utils.js');
    var jeffEnv = 'http://fe-jevgenim.myjar.local/';
    var relEnv = 'https://rel.myjar.com/';
    var liveEnv = 'https://www.myjar.com/';
    var smallLoans = '/small-loans';
    var borrowMoney = '/borrow-money-online';
    var logoutUrl = element(by.css('a[href="/logout"]'));
    var newsTips = '/news-tips';
    var how = '/how';
    var faqs = '/faqs';


    function scrollAndClickURL(val) {
        var elem = element(by.css('a[href="' + val + '"]'));
        return utils.scrollToLocator(elem).click();
    }

    // var currentUrl = function(url) {
    //     return function () {
    //         return browser.getCurrentUrl().then(function(actualUrl) {
    //             return url;
    //         });
    //     };
    // };


    function assertURL(val) {
        // var currentUrlContains = function (urlPart) {
        //     return function () {
        //         return browser.getCurrentUrl().then(function (actualUrl) {
        //             expect(actualUrl).toContain(urlPart);
        //         });
        //     };
        // };
        // console.log(typeof(val), val);
        // browser.wait(currentUrlContains(val), 5000);
        //expect(browser.getCurrentUrl()).toContain(val);
        expect(browser.wait(browser.getCurrentUrl(), 5000)).toContain(val);
    }

    function checkAndClickWarning() {
        var warning = element(by.css('a.confirm'));
        var warningDisplayed = element(by.css('app__fca-warning.is-visible')).isPresent();
        if (warningDisplayed) {
            utils.scrollToLocator(warning).click();
        }
        return this;
    }


    beforeEach(function () {
        //browser.sleep(700);
        browser.get(liveEnv);
        //browser.driver.manage().window().setSize(320, 568);
        browser.ignoreSynchronization = true;
        //checkAndClickWarning();
        //browser.sleep(700);
    });

    afterEach(function () {
        //browser.sleep(700);
    });

    xit('check some element', function () {
        var el = element(by.css('a[href="/news-tips"]'));
        browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
        browser.executeScript('window.scrollTo(0,window.pageYOffset-100)');
        el.click();
        utils.sleep(1000);
        //browser.navigate().back();
        browser.sleep(2500);


    });

    xit('check SEO ' + smallLoans + 'from home page', function () {
        //checkAndClickWarning();
        scrollAndClickURL(smallLoans);
        assertURL(smallLoans);
        console.log(smallLoans);

    });

    xit('check SEO ' + borrowMoney + 'from home page', function () {
        scrollAndClickURL(borrowMoney);
        assertURL(borrowMoney);
        console.log(borrowMoney);
    });

    it('check SEO ' + newsTips + 'from home page', function () {

        scrollAndClickURL(newsTips);
        assertURL(newsTips);
        console.log(newsTips);

    });

    xit('check SEO ' + how + 'from home page', function () {
        scrollAndClickURL(how);
        assertURL(how);
        console.log(how);
    });

    xit('check SEO ' + faqs + 'from home page', function () {
        scrollAndClickURL(faqs);
        assertURL(faqs);
        console.log(faqs);
    });

    xit('check all hrefs on homepage', function () {

        var myArray = [];

        browser.executeScript("document.querySelectorAll('a[href]')").then(function (args) {
            console.log();
        });

        /*
         if (attr != null && !attr.includes('tel')) {
         myArray.push(elem);
         return true;
         }
         return false
         });
         }).then(function (elm) {
         console.log((myArray[0]));*/
        /* for (var i = 0; i < myArray.length; i++) {
         myArray[i].() {
         browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
         browser.executeScript('window.scrollTo(0,window.pageYOffset-100)');
         assertURL();
         browser.sleep(1700);
         browser.navigate().back();
         }
         }*/
    });


});

/*  function scrollAndClickHREF(el, attr) {

 // browser.sleep(3000);
 el.click();
 console.log(1);
 browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
 browser.executeScript('window.scrollTo(0,window.pageYOffset-100)');
 assertURL(attr);
 console.log(3);
 console.log(4);
 //

 //!expect(browser.getCurrentUrl()).toContain('/not-found');
 console.log(5);
 //browser.get(relEnv);
 //browser.sleep(2000);
 //browser.navigate().back();
 // browser.sleep(2000);
 console.log(6);

 }*/
/*var myArray = [];

 element.all(by.css('a')).map(function (el) {
 el.getAttribute('href').then(function (attr) {

 if (attr !== null) {

 console.log(typeof(attr), attr);

 } else // do nothing


 });


 });*/


/*
 if (attr != null && attr.includes('myjar')) {
 el.isDisplayed().then(function (visible) {
 console.log(attr, visible);
 if (visible) {
 console.log(0);
 //scrollAndClickHREF(el, attr);
 browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
 browser.executeScript('window.scrollTo(0,window.pageYOffset-100)');
 console.log(1);
 utils.sleep(2500);
 el.click().then(function () {
 console.log(2);
 browser.navigate().back();
 });
 console.log(3);
 browser.sleep(1500);
 console.log(4);
 //browser.get(liveEnv);
 //browser.navigate().back();
 //browser.sleep(1500);
 //console.log(5);

 }
 });
 }
 });
 */
//});






