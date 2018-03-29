"use strict";

// Importing `index` handler from `handler/index.js` file
const handler = require('../handler/index');
// Include Joi package to validate request params and payload.
const Joi = require('joi');

module.exports = function() {
	return [
    {
			method: 'GET', 															// Methods Type
			path: '/guessit/{id}', 											// Url
			handler: handler.printGuessItOutput 				// Action for fetching result
		}
	];
}();
