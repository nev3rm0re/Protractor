/*
 // conf.js
 exports.config = {
 framework: 'jasmine',
 seleniumAddress: 'http://localhost:4444/wd/hub',
 specs: ['spec.js'],
 multiCapabilities: [{
 browserName: 'firefox'
 }, {
 browserName: 'chrome'
 }]
 }*/


// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec4.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        /*browser.get('http://fe-jevgenim.myjar.local/');*/
        /*console.log('Pewpew!');*/
        var width = 2560;
        var height = 1440;
        browser.driver.manage().window().setSize(width, height);
        //browser.manage().window().maximize();
    }

}



/*
// helper require function to import page objects
global.requirePO = function (relativePath) {
    return require(__dirname + '/../po/' + relativePath + '.po');
};

// helper require function to import helpers
global.requireHelper = function (relativePath) {
    return require(__dirname + '/../helpers/' + relativePath + '.js');
};
Adjust the paths accordingly - __dirname is the place where your config lies in. The provided functions would work for the following structure:

    - e2e
    - config
protractor.conf.js
- po
home_page.js
- helpers
helpers.js
- specs
example_spec.js
Then, you would be able to just have:

    var home_page = requirePO('home_page');
inside your spec file.*/
