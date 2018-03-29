"use strict";

// ================ Base Setup ========================//
// Include Hapi package
const Hapi = require('hapi');
// Include inert package
const Inert = require('inert');
// Include vision package
const Vision = require('vision');

// Create Server Object
const server = new Hapi.Server();
// Importing `route` routes from `routes/route.js` file
var routes = require('./routes/route');

server.connection({
  port: 3001
});

// =============== Routes for our API =======================//
// Add all the routes within the routes folder
for (var route in routes) {
  //Define routes
  server.route(routes[route]);
}
// =============== Start our Server =======================//
server.register(
  [
    Inert,
    Vision
  ], (err) => {
    if (err) {
      throw err; // throw error information
    }
    server.route([{
      method: 'GET', // Methods Type
      path: '/js/{file*}', // Url with filename
      handler: {
        directory: {
          path: 'public/js' // Initialize the directory path
        }
      }
    }, {
      method: 'GET', // Methods Type
      path: '/{file*}', // Url with filename
      handler: {
        directory: {
          path: 'public/html' // Initialize the directory path
        }
      }
    }]);
    server.start((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Server running at:', server.info.uri);
      }
    });
  });
