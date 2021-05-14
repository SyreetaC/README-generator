const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeToFile");
const {
  basicProjectQuestions,
  installationRequirements,
  installationCodeInput,
  installationRequirementConfirm,
  usageRequirementsConfirm,
  usageInfoInput,
  furtherUsageInput,
} = require("./utils/questions");

const inquirerData = async () => {
  const basicData = await inquirer.prompt(basicProjectQuestions);

  const getInstallationData = async () => {
    const { installation } = await inquirer.prompt(installationRequirements);

    if (installation) {
      let inLoop = true;
      let installationDataString = "";

      while (inLoop) {
        const { installationCode } = await inquirer.prompt(
          installationCodeInput
        );
        installationDataString += `${installationCode}\n`;
        const { furtherInstallation } = await inquirer.prompt(
          installationRequirementConfirm
        );
        inLoop = furtherInstallation;
      }

      return installationDataString;
    } else {
      return "No installation requirements ";
    }
  };

  const getUsageData = async () => {
    const { usage } = await inquirer.prompt(usageRequirementsConfirm);

    if (usage) {
      let inLoop = true;
      let usageDataString = "";

      while (inLoop) {
        const { usageInfo } = await inquirer.prompt(usageInfoInput);
        usageDataString += `- ${usageInfo}\n`;
        const { furtherUsage } = await inquirer.prompt(furtherUsageInput);
        inLoop = furtherUsage;
      }

      return usageDataString;
    } else {
      return "No usage information";
    }
  };

  const installationData = await getInstallationData();
  const usageData = await getUsageData();

  return { ...basicData, installationData, usageData };
};

const init = async () => {
  const data = await inquirerData();

  const generatedMarkdown = generateMarkdown(data);

  writeToFile("GENERATED_README.md", generatedMarkdown);
};

init();
