'use strict';

const moment = require('moment');
const logger = require('../config/winston');

const wfLog = {};

const formatUser = (user) => {
  const space = ' ';
  return '[' + user + '] ' + space.repeat(36 - user.length) ;
}

wfLog.info = (user, message) => {
  let timestamp = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + '] ';
  logger.info(timestamp + formatUser(user) + message);
};

wfLog.error = (user, message) => {
  let timestamp = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + '] ';
  logger.error(timestamp + user + message);
};

wfLog.warn = (user, message) => {
  let timestamp = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + '] ';
  logger.warn(timestamp + user + message);
};

wfLog.debug = (user, message) => {
  let timestamp = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + '] ';
  logger.debug(timestamp + user + message);
};

module.exports = wfLog;