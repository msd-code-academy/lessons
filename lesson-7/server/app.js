const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500);
    res.json(err);
}

app.use(errorHandler);

function handleRequest(action, req, res, next) {
    return action().then(result => {
        res.json(result);
    }).catch((error) => {
        next(error);
    });
}

app.get('/todos', (req, res, next) => {
    handleRequest(() => api.getTodoItems(), req, res, next);
});

app.get('/todos/:id', (req, res, next) => {
    const id = req.params.id;

    handleRequest(() => api.getTodoItem(id), req, res, next);
});

app.post('/todos/:id', (req, res, next) => {
    const id = req.params.id;
    const item = req.body;

    handleRequest(() => api.createTodoItem(id, item), req, res, next);
});

app.put('/todos/:id', (req, res, next) => {
    const id = req.params.id;
    const item = req.body;

    handleRequest(() => api.updateTodoItem(id, item), req, res, next);
});

app.delete('/todos/:id', (req, res, next) => {
    const id = req.params.id;

    handleRequest(() => api.deleteTodoItem(id), req, res, next);
});

api.initConnectionPool()
    .then(() => {
        // start the server
        app.listen(8080, function () {
            console.log('listening on 8080');
        });
    }).catch(error => {
        console.error(`connection to db failed: ${error}`);
    });