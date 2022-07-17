const { parentPort, isMainThread, workerData } = require("worker_threads");
const logger = require('./logger');
const intv = ((Math.floor(Math.random() * 10)) + 1) * 1000;

//isMainThread returns true of false according to the thread role
logger.info(workerData.workerId, 'Running inside the thread');
logger.info(workerData.workerId, `ETA: ${intv/1000} secs`);


setTimeout(() => {
  parentPort.postMessage(`Hello world from the thread`);
  parentPort.close();
}, intv);