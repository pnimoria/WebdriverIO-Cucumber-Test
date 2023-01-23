# WebdriverIO Cucumber Test Framework

Test automation framework for an application using WebdriverIO-CucumberBDD

## Tech Stack

- Webdriver IO: v7.0
- Cucumber : v7.0
- Selenium: v6.17
- Chrome driver : v108.0
- Allure reporter: v7.16

## Steps to install and execution

Below are the steps to have the code ready for execution

- Clone the above repository using the command `https://github.com/pnimoria/WebdriverIO-Cucumber-Test.git`
- Once cloned, goto the folder /WebdriverIO-Cucumber-Task and run command `npm install`
  Wait for dependencies to install
- All done from setup now :)

## Framework Structure

The overall framework is based on javascript using webdriver io, cucumber for applying BDD and follows Page Object Model design pattern

- Under the `tests` folder, there are below code folders
  -- `features` : Feature file and step definitions(Per page step definition)
  -- `files`: config properties for use across project
  -- `locator` : Page elements identified using CSS, Xpath
  -- `pages` : Page containing logic to demonstrate actions on web page

## Executing tests

- There is just 1 feature file having one scenario outline with 1 example.
  \*\* Search,sort and verify product details

- Run the below command to get the tests executed

`npm run test` - would run all the cucumber features and print data to console

`npm run test_withReport` - would run all cucumber features and generate and host allure report locally on a hosted server

## Dockerizing

- The tests can be run in a docker container easily with the `Dockerfile`

Note - Tests are configured to run locally on interactive chrome browser. Hence before building the docker image make sure to add `--headless` property for chrome capabilities in `wdio.conf.js`

Just go to the CLI, and type command to build the docker image

`docker build -t taxfix_task:v10 -f Dockerfile .`

The base image used is Node and java and chrome browser are installed on the container explicitly

Run below command to launch docker container and execute tests

`docker run taxfix_task:v10`

The tests will run in --headless mode and results would be displayed post execution
