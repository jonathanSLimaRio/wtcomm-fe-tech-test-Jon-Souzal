const shellE2e = require('shelljs');
const kill = require('kill-port');
const waitOn = require('wait-on');
const colorsE2e = require('colors');
const isPortReachable = require('is-port-reachable');

/**
 * It run through the list of ports and check if it needs to kill any before the tests
 */
[3333, 4400].forEach(async (port) => {
  if (await isPortReachable(3333, { host: 'http://localhost' })) {
    console.log(colorsE2e.cyan(`Port ${port} is up...I need to kill it`));
    kill(port);
  } else {
    console.log(colorsE2e.green(`Port ${port} is not up...all good`));
  }
});

const cliArgs = process.argv;

/**
 * It formats the cli args as --arg1 --arg2 etc.
 */
const args = cliArgs
  .slice(2, cliArgs.length)
  .map((arg) => (arg.includes('--') ? arg : `--${arg}`))
  .map((arg) => {
    // Custom arg to force nx to skip the cache. TODO: investigate the use of command-line-args
    if (
      (cliArgs.indexOf('--force') !== -1 || cliArgs.indexOf('--f') !== -1) &&
      cliArgs.indexOf('--skip-nx-cache') === -1
    ) {
      return '--skip-nx-cache';
    }
    return arg;
  })
  .join(' ');

const childe2e = shellE2e.exec('yarn run-p start:api start:ui:storybook', {
  async: true,
});

waitOn({
  resources: ['http://localhost:3333/api/movies', 'http://localhost:4400/'],
})
  .then(async () => {
    console.log(colorsE2e.cyan('The movies Api is up'));
    console.log(colorsE2e.cyan('Storybook is up'));

    const res = shellE2e.exec(`yarn nx e2e fe-wtc-tech-test-e2e ${args}`);

    console.log(
      colorsE2e.cyan(`Tests are all done, I can now kill API and Storybook...`)
    );
    kill(3333);
    kill(4400);
    console.log(colorsE2e.cyan(`Done.`));
    process.exit(res.code);
  })
  .catch(function (err) {
    console.log(colorsE2e.red(err));
  });
