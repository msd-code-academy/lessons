const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

let database;

function initConnectionPool(db) {
    return MongoClient.connect(config.MONGO_URL).then(db => {
        database = db;
    });
}

function getTodoItems() {
    return database.collection('todos').find({}).toArray();
}

function getTodoItem(id) {
    return database.collection('todos').findOne({ _id: id });
}

function createTodoItem(id, item) {
    return database.collection('todos').insertOne({ _id: id, ...item });
}

function updateTodoItem(id, item) {
    return database.collection('todos').updateOne({ _id: id }, item);
}

function deleteTodoItem(id) {
    return database.collection('todos').deleteOne({ _id: id });
}

module.exports = {
    initConnectionPool,
    getTodoItems,
    getTodoItem,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem
}