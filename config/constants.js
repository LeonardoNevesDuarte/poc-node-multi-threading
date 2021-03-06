"use strict";

const CONSTANTS = {};

CONSTANTS.HTTP_STATUS_CODE = {
	OK: 200,
	CREATED: 201,
	UPDATED: 202,
	NO_CONTENT: 404,
	BAD_REQUEST: 400,
	TOKEN_EXPIRED: 406,
	UNAUTHORIZED: 401,
	PAYMENY_REQUIRED: 402,
	ACCESS_FORBIDDEN: 403,
	URL_NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	UNREGISTERED: 410,
	PAYLOAD_TOO_LARGE: 413,
	CONCURRENT_LIMITED_EXCEEDED: 429,
	INTERNAL_SERVER_ERROR: 500,
	BAD_GATEWAY: 502,
	SHUTDOWN: 503,
	UNPROCESSABLE_ENTITY: 422
};

CONSTANTS.STATUS = {
	INACTIVE: 0,
	ACTIVE: 1
};

CONSTANTS.IS_DELETED = {
	YES: 1,
	NO: 0
};

CONSTANTS.RUNTIME_ENV = {
  THREADS_AMOUNT: 4,
  USER: 'MAIN',
}

CONSTANTS.MESSAGES = {
  WELCOME_MSG: 'Multi-threading with Node',
  AUTHOR_MSG: 'Built by Leonardo Neves Duarte',
  GIT_REF: 'https://github.com/LeonardoNevesDuarte/poc-node-multi-threading',
  VERSION: '1.0.0'
};

CONSTANTS.NOTIFICATION = {

}

module.exports = CONSTANTS;