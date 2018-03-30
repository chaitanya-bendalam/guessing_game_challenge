"use strict";

// Importing `index` handler from `handler/index.js` file
const handler = require('../handlers/index');
// Include Joi package to validate request params and payload.
const Joi = require('joi');

module.exports = function() {
	return [
    {
			method: 'GET', 															// Methods Type
			path: '/guessit/{id}', 											// Url
			handler: handler.printGuessItOutput 				// Action for fetching result
		},
		{
			method: 'GET', 															// Methods Type
			path: '/guessit/reloadgame/', 							// Url
			handler: handler.reloadGame 				// Action for reloading game
		}
	];
}();
