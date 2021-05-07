// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions
const basicProjectQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "list",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    name: "license",
    message: "Select a license for your project",
  },
  {
    type: "input",
    name: "description",
    message: "What is the project's description?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can people contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Are there any tests for this project?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your gitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your e-mail address?",
  },
];

const installationRequirements = [
  {
    type: "confirm",
    name: "installation",
    message: "Are there any installation requirements?",
  },
];

const installationCodeInput = [
  {
    type: "input",
    name: "installationCode",
    message: "Type your installation code directly below:",
  },
];

const installationRequirementConfirm = [
  {
    type: "confirm",
    name: "furtherInstallation",
    message: "Are there any further installation requirements?",
  },
];

const usageRequirementsConfirm = [
  {
    type: "confirm",
    name: "usage",
    message: "Are there any usage information?",
  },
];

const usageInfoInput = [
  {
    type: "input",
    name: "usageInfo",
    message: "Type your usage information below:",
  },
];

const furtherUsageInput = [
  {
    type: "confirm",
    name: "furtherUsage",
    message: "Are there any further usage information?",
  },
];

// Function to write READme file
const writeToFile = (fileName, data) => {
  const errorHandling = (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Readme file generated!");
    }
  };

  fs.writeFile(fileName, data, errorHandling);
};

// Create a function to collect data using inquirer
const inquirerData = async () => {
  const basicData = await inquirer.prompt(basicProjectQuestions);

  const installationData = async () => {
    let installationDataString = "";
    const isRequired = await inquirer.prompt(installationRequirements);
    if (isRequired.installation) {
      let isLooping = { furtherInstallation: true };
      while (isLooping.furtherInstallation) {
        const newString = await inquirer.prompt(installationCodeInput);
        installationDataString =
          installationDataString + `${newString.installationCode}\n`;
        isLooping = await inquirer.prompt(installationRequirementConfirm);
      }
    } else {
      installationDataString = "No installation requirements ";
    }
    const installationDataObject = {
      installationData: installationDataString,
    };
    return installationDataObject;
  };

  const usageData = async () => {
    let usageDataString = "";
    const isRequired = await inquirer.prompt(usageRequirementsConfirm);
    if (isRequired.usage) {
      let isLooping = { furtherUsage: true };
      while (isLooping.furtherUsage) {
        const newString = await inquirer.prompt(usageInfoInput);
        usageDataString = usageDataString + `- ${newString.usageInfo}\n`;
        isLooping = await inquirer.prompt(furtherUsageInput);
      }
    } else {
      usageDataString = "No usage information";
    }
    const usageDataObject = {
      usageData: usageDataString,
    };
    return usageDataObject;
  };

  const installationDataObject = await installationData();
  const usageDataObject = await usageData();

  return { ...basicData, ...installationDataObject, ...usageDataObject };
};

// Function to initialize app

// Function call to initialize app
init();
