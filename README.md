

- You need to install Protractor and start up selenium server
- Run your tests and enjoy


## Installation and Usage
- Install LTS version of node: from ```https://nodejs.org/en/```
- Use npm to install Protractor globally:
```
npm install -g protractor (it will install two command line tools: protractor and webdriver-manager)
```
- Run in terminal: ```protractor --version``` to check if it's working

- Then update the webdriver-manager:
```
webdriver-manager update
```
- Now start up a server with:
```
webdriver-manager start  (do that in a new terminal tab)
```
- Now clone the repo where you like, cd into it and run your first test by:
```
protractor conf.js
```
## Configuration

- To make the test run on your FE replace all "fe-jevgenim" usages in `spec.js` to your FE-name

- To configure resolution go to ```conf.js``` and change width and height parameters for the browser

- Currently test is set to run on ```Chrome``` browser (browser can be specified in ```conf.js```)

## Possible errors or issues

- You might need to use sudo to: ```webdriver-manage start```

- If you had other frameworks using webdriver, kill all contradicting processes:

``` ps aux | grep webdriver``` and ```kill "process id"```


```
Note that test is written for 2560x1440 resolution
```
