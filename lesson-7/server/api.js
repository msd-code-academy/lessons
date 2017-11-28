const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

function executeQuery(query) {
    // obtain connection, execute query, make sure connection is closed
    return MongoClient.connect(config.MONGO_URL)
        .then(database =>
            query(database)
                .then(result => {
                    database.close();
                    return result;
                }).catch(err => {
                    database.close();
                    throw err;
                }));
}

function getTodoItems() {
    return executeQuery(database => {
        return database.collection('todos').find({}).toArray();
    })
}

function getTodoItem(id) {
    return executeQuery(database => {
        return database.collection('todos').findOne({ _id: id });
    })
}

function createTodoItem(id, item) {
    return executeQuery(database => {
        return database.collection('todos').insertOne({ _id: id, ...item });
    })
}

function updateTodoItem(id, item) {
    return executeQuery(database => {
        return database.collection('todos').updateOne({ _id: id }, item);
    })
}

function deleteTodoItem(id) {
    return executeQuery(database => {
        return database.collection('todos').deleteOne({ _id: id });
    })
}

module.exports = {
    getTodoItems,
    getTodoItem,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem
}