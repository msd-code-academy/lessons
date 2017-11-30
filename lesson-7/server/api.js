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

function resetCollection() {
    return database.collection(collectionName).drop();
}

// TODO: impelment CRUD operations on todos collection

function getTodoItems() {
    
}

function getTodoItem(id) {
    
}

function createTodoItem(id, item) {
    
}

function updateTodoItem(id, item) {
    
}

function deleteTodoItem(id) {
    
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