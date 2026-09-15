# User API

A simple RESTful API built with **Node.js** and **Express.js** for managing users in memory. This project demonstrates the core CRUD operations used in REST APIs.

## Features

* Get all users
* Get a single user by ID
* Create a new user
* Update an existing user
* Delete a user
* In-memory data storage

## Tech Stack

* **Node.js**
* **Express.js**
* **REST API**
* **JavaScript**

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd user-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node server.js
```

The API will be available at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/`              | Test route              |
| GET    | `/api/users`     | Get all users           |
| GET    | `/api/users/:id` | Get a user by ID        |
| POST   | `/api/users`     | Create a new user       |
| PUT    | `/api/users/:id` | Update an existing user |
| DELETE | `/api/users/:id` | Delete a user           |

## Example Request

### Create a User

**POST** `/api/users`

Request body:

```json
{
  "name": "Ali",
  "email": "ali@example.com",
  "age": 22
}
```

## Project Structure

```text
user-api/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Notes

This project uses **in-memory storage**, so user data will be reset whenever the server restarts. No database is required.

## Author

**Muhammad Nihaas**
