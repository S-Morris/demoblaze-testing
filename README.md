# Demoblaze Playwright Testing Project

This project utilizes [Playwright](https://playwright.dev/) for end-to-end testing of the [Demoblaze](https://www.demoblaze.com/) web application, with integrated [Allure Reports](https://docs.qameta.io/allure/) for comprehensive test reporting.

## Project Overview

The objective is to create a robust test suite covering various aspects of the Demoblaze application, ensuring functionality and reliability.

## Features

- Automated end-to-end tests using Playwright
- Detailed test reports with Allure
- Continuous integration setup with GitHub Actions

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/demoblaze-playwright.git
   cd demoblaze-playwright
   ```

2. **Install dependencies:**

   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Install Playwright browsers:**

   ```bash
   # Using npm
   npx playwright install

   # Or using yarn
   yarn playwright install
   ```

## Allure Report Integration

To integrate Allure Reports:

1. **Install the Allure Playwright reporter:**

   ```bash
   # Using npm
   npm install -D allure-playwright

   # Or using yarn
   yarn add -D allure-playwright
   ```

2. **Configure the reporter in `playwright.config.js`:**

   ```javascript
   // playwright.config.js
   module.exports = {
     reporter: [
       ['list'],
       ['allure-playwright']
     ],
     // other configurations
   };
   ```

3. **Generate and view the report:**

   After running the tests, generate the Allure report:

   ```bash
   allure generate ./allure-results -o ./allure-report
   allure open ./allure-report
   ```

   For more detailed instructions, refer to the [Allure Playwright integration guide](https://allurereport.org/docs/playwright/).

## Running Tests

Execute the test suite with:

```bash
# Using npm
npx playwright test

# Or using yarn
yarn playwright test
```

To run tests with a specific configuration or tag, use:

```bash
npx playwright test --config=playwright.config.js --grep @tagname
```

## Continuous Integration

This project includes a GitHub Actions workflow for continuous integration. The workflow is defined in `.github/workflows/ci.yml` and performs the following steps:

- Installs dependencies
- Runs the test suite
- Generates the Allure report
- Publishes the report as an artifact


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Playwright](https://playwright.dev/) for the testing framework
- [Allure Reports](https://docs.qameta.io/allure/) for the reporting tool

