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

    function scrollAndClickURL(val) {
        var elem = element(by.css('a[routerlink="' + val + '"]'));
        utils.scrollToLocator(elem).click();
        return elem;
    }

    function assertURL(val) {
        expect(browser.getCurrentUrl()).toContain(val);
    }


    beforeEach(function () {
        browser.get(relEnv);
        browser.ignoreSynchronization = true;
    });

    it('check SEO ' + smallLoans + 'from home page', function () {
        scrollAndClickURL(smallLoans);
        assertURL(smallLoans);
    });

    it('check SEO ' + borrowMoney + 'from home page', function () {
        scrollAndClickURL(borrowMoney);
        assertURL(borrowMoney);
    });
});



