# User API

A simple REST API built with Node.js and Express.js for managing users in memory.

## Features

- GET all users
- GET a single user by ID
- POST create a new user
- PUT update an existing user
- DELETE remove a user

## Setup

```bash
npm install
node server.js

Server runs at http://localhost:3000.

Endpoints
Method	Endpoint	Description
GET	/	Test route
GET	/api/users	Get all users
GET	/api/users/:id	Get one user by ID
POST	/api/users	Create a new user
PUT	/api/users/:id	Update a user
DELETE	/api/users/:id	Delete a user

Example POST Body
json
{
  "name": "Ali",
  "email": "ali@example.com",
  "age": 22
}
```

### Tech Stack
Node.js

Express.js

```
### Author
Muhammad Nihaas
