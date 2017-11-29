const mongodb = require('mongodb');

let database;
let collectionName;

function initConnectionPool(url, collection = 'todos') {
    return mongodb.MongoClient.connect(url).then(db => {
        database = db;
        collectionName = collection;
    });
}

function closeConnectionPool() {
    if(database) {
        return database.close();
        database = undefined;
    } else {
        return Promise.resolve();
    }
}

function getTodoItems() {
    return database.collection(collectionName).find({}).toArray();
}

function getTodoItem(id) {
    return database.collection(collectionName).findOne({ _id: id });
}

function createTodoItem(id, item) {
    return database.collection(collectionName).insertOne({ _id: id, ...item });
}

function updateTodoItem(id, item) {
    return database.collection(collectionName).updateOne({ _id: id }, item);
}

function deleteTodoItem(id) {
    return database.collection(collectionName).deleteOne({ _id: id });
}

function resetCollection() {
    return database.collection(collectionName).drop();
}

module.exports = {
    initConnectionPool,
    closeConnectionPool,
    getTodoItems,
    getTodoItem,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem,
    resetCollection
}