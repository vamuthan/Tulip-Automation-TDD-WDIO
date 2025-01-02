Tulip-Automation-TDD-WDIO
Description
This project is performs UI automation on "Tulip.com"; majorly focusing on important modules.

How to run the project
Clone the repository.
Make sure java, allure, maven have been installed. 2.1 java --version 2.2 allure --version 2.3 mvn --version
After completing the above commands use 
  1. npm install
  2. set LAMBDATEST=true
    set LT_USERNAME=valleeswaraamuthan
    set LT_PASSWORD=v45kYD8yCfVSt6A7vZS8cSzrvksicJdUEyOJzfpB3wwq2sdajU
    set browser=edge
    npx wdio run wdio.conf.js
to run the project
After running the automation "allure-results" will be generated in the project root directory; to view the results use "allure generate" to generate allure-reports.
