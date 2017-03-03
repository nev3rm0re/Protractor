/**
 * Created by jevgenim on 20/02/17.
 */


function scrollToLocator(elm) {
    browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    browser.executeScript('window.scrollTo(0,window.pageYOffset-100)');
}

function sleep(sec) {
    browser.sleep(sec);
}

describe('Random Testing', function () {

    var home_page = require('./pages/home_page.js');

    it('login', function () {
        browser.get('http://fe-jevgenim.myjar.local/');
        browser.ignoreSynchronization = true;
        home_page.login('07555666771');
        sleep(3000);
    });


});


//browser.actions().mouseMove(element).perform();