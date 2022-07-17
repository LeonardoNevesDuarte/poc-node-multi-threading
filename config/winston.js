'use strict';

const winston = require('winston');
const { combine, splat, timestamp, colorize, printf } = winston.format;

const myLogFormat = printf(({ level, message, ...metadata }) => {
  let msg = `[${level}] : ${message}`;
  return msg;
});

const options = {
  console: {
    level: 'debug',
    format: combine(
      colorize(),
      myLogFormat),
    handleExceptions: true,
    json: false
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
