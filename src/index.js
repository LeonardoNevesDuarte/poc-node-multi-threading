const { Worker } = require("worker_threads");
const figlet = require('figlet');
const logger = require('./logger');
const welcomeMsg = 'Multi-threading with Node';
const os = require('os');
const THREADS_AMOUNT = 4;
const user = 'MAIN';
const uuid = require('uuid');

const main = () => {
  console.log('Starting POC...');
  console.log('Process ID: ', process.pid);
  console.log('OS hostname', os.hostname());
  console.log('OS platform', os.platform());
  console.log('OS platform', os.version());
  console.log('OS # CPUs: ', os.cpus().length);
  console.log('OS CPU type: ', os.cpus()[0].model);
  console.log('');

  // Array of promises
  const promises = [];
  for (let idx = 0; idx < THREADS_AMOUNT; idx += 1) {
    let threadId = uuid.v4().toUpperCase();
    logger.info(user, 'Creating thread #' + threadId);
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker('./src/thread.js', {
          workerData: {
            workerId: threadId,
          }
        });
        worker.on('exit', () => {
          logger.info(user, 'Closing thread #' + threadId);
          resolve();
        });
        worker.on('message', (value) => {
          logger.info(user, `Message received from thread: ${value}`);
          resolve();
        });
      })
    );
  }
  // Handle the resolution of all promises
  return Promise.all(promises);
};

const intro = async () => {
  figlet.text(welcomeMsg, {
    font: 'Slant',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  }, function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.error(err);
      return;
    }
    console.log(data);
    console.log('');
    console.log('Built by Leonardo Neves Duarte');
    console.log('https://github.com/LeonardoNevesDuarte/poc-node-multi-threading');
    console.log('');

    main();

  });
};

intro();
