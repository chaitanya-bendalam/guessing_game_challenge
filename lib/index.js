"use strict";

// ================ Base Setup ========================//
// Include Hapi package
const Hapi = require('@hapi/hapi');
// Include inert package
const Inert = require('@hapi/inert');
// Include vision package
const Vision = require('@hapi/vision');

// Importing `route` routes from `routes/route.js` file
var routes = require('./routes/route');
// Importing `configs` from `config.js` file
const configs = require('./config');

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

(async () => {
    const server = await new Hapi.Server({
        host: configs.ip,
        port: configs.port
    });


    await server.register([
        Inert,
        Vision,
    ]);
    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch (err) {
        console.log(err);
    }

    // Add all the routes within the routes folder
    for (var route in routes) {
        //Define routes
        server.route(routes[route]);
    }
})();