## Custom REST API with Testing

This project is a RESTful API built with **Node.js**, **Express**, and **MySQL**. 
It supports full **CRUD operations** on users and is thoroughly tested using **Jest** and **Supertest** with both **real and mocked database tests**.
-------

##  API Endpoints

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/api/users`        | Get all users              |
| GET    | `/api/users/:id`    | Get a user by ID           |
| POST   | `/api/users`        | Create a new user          |
| PATCH  | `/api/users/:id`    | Update user by ID          |
| DELETE | `/api/users/:id`    | Delete user by ID          |

--------

##  Tech Stack

- **Backend**: Node.js, Express
- **Database**: MySQL
- **Environment Config**: dotenv
- **Testing Tools**: Jest, Supertest

--------

## Setting up Environment Variables

Create a .env file with :

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdbname

--------

## Start the server

npm start

--------

## Running the Tests

npm test
This command runs:
✅ Unit tests (real DB + mocked DB)
✅ Integration tests
✅ API tests using Supertest
✅ Code coverage report

----------

## Testing Strategy
Type	     |   Description	             |  Location
Unit Tests |  DB logic (real + mocked)   | test/unit/
Integration|	DB import and CRUD flows   | test/integration/import.test.js
API Tests	 |  Full API endpoint coverage | test/api/index.test.js

-------

## Testing Folder Structure

test/
├── api/
│   └── index.test.js
├── integration/
│   └── import.test.js
└── unit/
    ├── db.test.js
    └── db.mock.test.js


<img width="556" alt="image" src="https://github.com/user-attachments/assets/ada12565-6191-4eaa-a3d4-b58432974c63" />


