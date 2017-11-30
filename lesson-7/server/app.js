const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const config = require('./config');

const requestHandler = require('./requestHandler')
const handleRequest = requestHandler.handleRequest;
const errorHandler = requestHandler.handleError;

const app = express();
app.use(bodyParser.json());

app.use(errorHandler);

/* TODO: add REST endpoints */

api.initConnectionPool(config.MONGO_URL)
    .then(() => {
        // start the server
        app.listen(8080, function () {
            console.log('listening on 8080');
        });
    }).catch(error => {
        console.error(`connection to db failed: ${error}`);
    });
