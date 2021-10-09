const shell = require('shelljs');
const colors = require('colors');
const figlet = require('figlet');
const openUrl = require('open');
const waitOnFe = require('wait-on');
const fs = require('fs');
const butler = require('../../butler');
const capitalize = require('lodash.capitalize');
const { argv } = require('yargs');
const { ANGULAR, ANGULARV2, REACT } = require('../../common/frameworks');
const LINKS = require('../../common/links.json');
const dir = `${process.cwd()}/butler/.tmp`;
const file = `${dir}/answers.json`;

const {
  Instructions: { href: instructionsUrl },
  Storybook: { href: storybook },
  Api: { href: api },
  Application: { href: feUrl },
} = LINKS;

const getFrameworksServeCommand = (framework) => {
  switch (framework) {
    case ANGULAR:
      return 'yarn serve:angularjs';
    case REACT:
      return 'yarn serve:react';
    case ANGULARV2:
      return 'yarn serve:angularv2';
    default:
      break;
  }
};

const openUrlInBrowser = async (url) => {
  await openUrl(url);
};

const writeFile = (data) => {
  fs.writeFile(file, data, 'utf8', (err) => {
    if (err) {
      console.log('Error writing answers (file).');
      return;
    } else {
      shell.exec('yarn start', { async: true });
    }
  });
};

const postRun = async () => {
  const changeFrameworkCLIArg = argv.changeFramework || argv.cf;

  if (fs.existsSync(file) && !changeFrameworkCLIArg) {
    const answers = JSON.parse(fs.readFileSync(file));

    figlet.text(
      `Welcome,
      
      ${capitalize(answers.name)} ${capitalize(answers.surname)}!!`,
      async (err, data) => {
        if (err) return;
        console.log(colors.cyan(data));

        shell.exec('yarn run-p start:**', { async: true });

        const serveCommand = getFrameworksServeCommand(answers.framework);

        shell.exec(serveCommand, { async: true });

        console.log(colors.cyan('*-------------------------------------*'));
        console.log(colors.cyan('*Waiting for services to be all up:...'));
        console.log(colors.cyan('*-------------------------------------*'));

        waitOnFe({
          resources: [instructionsUrl, feUrl, api, storybook],
        })
          .then(function () {
            console.log(colors.cyan('The API is now up'));
            console.log(colors.cyan('Storybook is now up'));
            console.log(
              colors.cyan(`Instructions is now up at: ${instructionsUrl}`)
            );
            console.log(colors.cyan(`Launching the FE app at: ${feUrl}`));
            openUrlInBrowser(instructionsUrl);
          })
          .catch(function (err) {
            console.log(colors.red(err));
          });
      }
    );
  } else {
    if (changeFrameworkCLIArg) {
      const oldAnswers = JSON.parse(fs.readFileSync(file));
      console.log('You provided these answers:');
      console.log(oldAnswers);
      const { framework } = await butler('framework');
      const updatedAnswers = { ...oldAnswers, framework };
      writeFile(JSON.stringify(updatedAnswers));
    } else {
      console.log(colors.bold('WELCOME TO WTC TECH TEST!'));

      console.log(
        colors.cyan(
          'This the first time you are running this app, please answer the below questions before starting.'
        )
      );

      console.log(
        colors.red.underline.bold(
          "Make sure you know the framework you need to use and the test number. If you don't, kill the app (ctrl+C) and ask you recruiter"
        )
      );

      const firstTimeAnswers = await butler();
      fs.mkdir(dir, (err) => {
        if (err) {
          console.log('Error writing answers (folder).');
          return;
        }
        if (err) return;
        writeFile(JSON.stringify(firstTimeAnswers));
      });
    }
  }
};

postRun();

module.exports = postRun;
