const inquirer = require('inquirer');
const { ANGULAR, ANGULARV2, REACT } = require('../common/frameworks');
const TITLES = require('../common/titles');

const questions = {
  name: {
    type: 'input',
    name: 'name',
    message: "What's your first name",
  },
  surname: {
    type: 'input',
    name: 'surname',
    message: "What's your surname",
  },
  framework: {
    type: 'list',
    name: 'framework',
    message: 'What framework do you need to use',
    choices: [ANGULAR, ANGULARV2, REACT],
  },
  testNumber: {
    type: 'list',
    name: 'testNumber',
    message: 'Which test number were you asked to do',
    choices: TITLES.map(({ title }, index) => `${index + 1} - ${title}`),
  },
};

const butler = async (singleQuestion) => {
  const questionsArr =
    (singleQuestion && [questions[singleQuestion]]) ||
    Object.values(questions).map((answer) => answer);
  return await inquirer.prompt(questionsArr);
};

module.exports = butler;
