/**
 * Created by jevgenim on 02/03/17.
 */
//function that randomly generates a mobile number
var utils = function () {


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
    this.scrollToLocator = function (elm) {
        browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
        browser.executeScript('window.scrollTo(0,window.pageYOffset-100)');
        return elm;
    };

//browser.sleep alias
    this.sleep = function (sec) {
        browser.sleep(sec);
    }
};
module.exports = new utils();