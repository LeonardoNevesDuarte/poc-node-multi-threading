const { Worker } = require("worker_threads");
const figlet = require('figlet');
const welcomeMsg = 'Multi-threading with Node';
const os = require('os');

const main = () => {
  console.log('Starting POC...');
  console.log('Process ID: ', process.pid);
  console.log('OS hostname', os.hostname());
  console.log('OS platform', os.platform());
  console.log('OS platform', os.version());
  console.log('OS # CPUs: ', os.cpus().length);
  console.log('OS CPU type: ', os.cpus()[0].model);
  console.log('');
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

/*
//Auto execute function
(() => {
  // Array of promises
  const promises = [];
  for (let idx = 0; idx < THREADS_AMOUNT; idx += 1) {
    console.log('creating thread ' + (idx + 1));
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker('./src/thread-entry.js', {
          workerData: {
            workerId: (idx + 1),
          }
        });
        console.log('Thread Id: ', worker.threadId);
        worker.on('exit', () => {
          console.log('closing thread of: ', (idx + 1));
          resolve();
        });
        worker.on('message', (value) => {
          console.log(`message received from ${(idx + 1)}: ${value}`);
          resolve();
        });
      })
    );
  }
  // Handle the resolution of all promises
  return Promise.all(promises);
})().then(() => {
  canCheckThreads = false;
});
*/

function infiniteLoop() {
  setTimeout(() => {
    if (canCheckThreads) {
      console.log('Threads still running...');
      infiniteLoop();
    }
  }, 1000);
}

