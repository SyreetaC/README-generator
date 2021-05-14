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

module.exports = {
  basicProjectQuestions,
  installationRequirements,
  installationCodeInput,
  installationRequirementConfirm,
  usageRequirementsConfirm,
  usageInfoInput,
  furtherUsageInput,
};
