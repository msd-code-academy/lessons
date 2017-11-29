const chai = require('chai');
const api = require('../api');
const config = require('../config');
const collection = 'todos_TEST'; // use separate collection for tests

const testItems = [
    {
        _id: 1,
        text: 'test1'
    },
    {
        _id: 2,
        text: 'test2'
    },
    {
        _id: 3,
        text: 'test3'
    }
];

describe('todo API Tests', () => {
    before(() => {
        // initialize the api
        return api.initConnectionPool(config.MONGO_URL, collection)
        .then(() => api.resetCollection().catch(error => { console.log(error) }))
        .then(() => 
            // create test items
            Promise.all(testItems.map((item) => api.createTodoItem(item._id, item))));
    });

    after(() => api.closeConnectionPool());

    describe('test getTodoItems', () => {
        it('gets all test items', () => {
            return api.getTodoItems().then(items => {
                chai.expect(items).to.deep.equal(testItems);
            })
        })
    });

    describe('test getTodoItem', () => {
        it('gets todo item by id', () => {
            return api.getTodoItem(testItems[0]._id).then(item => {
                chai.expect(item).to.deep.equal(testItems[0]);
            })
        })
    });

    describe('test createTodoItem', () => {
        it('creates new todo item and retrieves it', () => {
            const newItem = {
                _id: 4,
                text: "test4"
            }

            return api.createTodoItem(newItem._id, newItem)
            .then(() => {
                api.getTodoItem(newItem._id).then(item => {
                    chai.expect(item).to.deep.equal(newItem);
                })
            });
        })
    });

    describe('test updateTodoItem', () => {
        it('updates an existing todo item and retrieves it', () => {
            const updatedItem = { ...testItems[0] }
            updatedItem.text = "test1 updated";

            return api.updateTodoItem(updatedItem._id, updatedItem)
            .then(() => {
                api.getTodoItem(updatedItem._id).then(item => {
                    chai.expect(item).to.deep.equal(updatedItem);
                })
            });
        })
    });

    describe('test deleteTodoItem', () => {
        it('deletes an existing todo item and checks it is not there anymore', () => {
            const deletedItem = { ...testItems[0] }

            return api.deleteTodoItem(deletedItem._id)
            .then(() => {
                api.getTodoItem(deletedItem._id).then(item => {
                    chai.expect(item).to.be.null;
                })
            });
        })
    });
});
    