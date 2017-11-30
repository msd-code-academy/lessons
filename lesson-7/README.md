# Node.js backend

## Goal
- Build a backend for our todo list application

## Course outline
- Short introduction into RESTful architecture
- Use Node.js express server for create, read, update, delete (CRUD) operations
- MongoDB as data storage
- End2end, integration and unit tests
- Asynchronous data fetching on the frontend via redux-thunk

### Introduction/Motivation
In the last lesson, the data was just kept in memory and not persisted. In this lecture, we will create a Node.js backend and store the data in a non-relational database (MongoDB).

The target architecture will be the following: 

![architecture](https://zellwk.com/images/2016/01/crud-express-mongo.png "reference: https://zellwk.com/blog/crud-express-mongodb/")

### Preparation for the course
Start by cloning the repository: 
```shell
git clone https://github.com/msd-code-academy/lessons.git
git pull
```

The files relevant for this lesson will be located in the folder **lesson-7**. It consists of a Node.js server part (folder **server**) as well as a React/Redux client part (folder **todos**). 

Run the following commands to install the necessary packages:
```shell
cd lesson-7
cd server
npm install
cd todos
npm install
```

There are several parts of the code which are marked by **TODO** which we will fill in the exercises. As a homework, you can further extend the solution. During the course, please make sure you are connected to the Guest WIFI to be able to connect to the database which is hosted on an online service (it is not accessible from the company network).

### RESTful architectures
REST stand for Representational state transfer. Basically, it allows access to textual representations (e.g., JSON or XML) of web resources (identified via URI) using a standard set of pre-defined HTTP methods:
- GET -  represents "read" operations. Used for **retrieving** resources and collections. It is a "safe" operation - it does not modify data on the server.
- POST - "write" operations. Used for **creating** new resources. 
- PUT - "write" operations. Used for **updating** existing resources. 
- PATCH - partial "write" operations. Used for performing **partial updates**. Unlike the PUT method, where the whole resource should be provided, with the PATCH method you provide only part of the resource to be changed - for example, a specific property. 
- DELETE - "delete" operations. Used for **deleting** resources. 

Please note that the REST architecture is a client-server model which has some important constraints like statelessness, cacheability and uniform interface (see references for more details).

Our resource will be a list of todo items. We will support the following operations:
- /todos
  - GET: list all todo items
- /todos/:id
  - POST: create todo item with id (**C**reate)
  - GET: retrieve todo item with id (**R**ead)
  - PUT: update todo item with id (**U**pdate)
  - DELETE: delete todo item with id (**D**elete)

#### References
- HTTP/1.1 Specification (https://www.w3.org/Protocols/)
- REST API Tutorial (http://www.restapitutorial.com/)
- https://en.wikipedia.org/wiki/Representational_state_transfer

### Node.js express server
#### Exercise
- Implement CRUD endpoints (see server/app.js)

### MongoDB
#### Exercise
- Implement CRUD operations and make tests pass (see server/api.js). Run tests using `npm run test`

### Testing
#### Exercise
- Add unit test to test the error case of RequestHandler (see test/requestHandler.js). 
Hint: use `sinon.stub().returnsPromise().rejects(testError)`

### Connecting the frontend
#### Exercise
- Add error handling if a request to the backend fails (for example, display a message for the user)
- Add a spinner while waiting for responses from the backend (see lesson 4)

## Further exercises / homework
- Implement a search-box to search for todo-items. Create a new endpoint on server-side to perform search operations. Use built-in MongoDB features for that purpose.
- Add a new summary endpoint on server-side to provide data for the summary page (number of items, most recent items). Like this, you do not need to fetch the whole list of items when you open the summary page.
- Implement further tests for the backend. For example, cover each endpoint by an end2end test.