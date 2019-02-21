"use strict";

// ================ Base Setup ========================//
// Include Hapi package
const Hapi = require('hapi');
// Include inert package
const Inert = require('inert');
// Include vision package
const Vision = require('vision');

// Importing `route` routes from `routes/route.js` file
var routes = require('./routes/route');
// Importing `configs` from `config.js` file
const configs = require('./config');

// Create Server Object
const server = Hapi.Server({
    host: configs.ip,
    port: configs.port
});
// =============== Routes for our API =======================//
// Add all the routes within the routes folder
for (var route in routes) {
    //Define routes
    server.route(routes[route]);
}
// =============== Start our Server =======================//
const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
