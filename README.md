## CustomApi
A simple RESTful API built using **Node.js**, **Express**, and **MySQL**, with a basic frontend for interacting with user data.
---

##  Features
- Perform **CRUD operations** on users
- Integrated with MySQL database

  ---
  
  ## API Endpoints
- GET => "/api/users" => get all users
- GET => "/api/users/:id" => get users by id
- POST => "/api/users" => post a new user
- PATCH => "/api/users/:id" => Update a user
- DELETE => "/api/users/:id" => delete a user

  ---
  
##  Database Setup

- **DB Used**: MySQL
- **Table Schema**:
sql:
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(255),
  gender VARCHAR(50)

);

----

## How to run your server
1- Clone the repo and install dependencies.
2- Create .env file
3- Start the server (node index.js)

----
## How to interact with your API (e.g., sample requests and responses)

1)GET ALL USERS
curl.exe http://localhost:8000/api/users

2) GET A SINGLE USER BY ID
   curl.exe http://localhost:8000/api/users/2

3)DELETE A USER
curl.exe  DELETE http://localhost:8000/api/users/5
---
## Tools Used
* Node.js
* Express.js
* MySQL + mysql2
* dotenv
* HTML + CSS + JavaScript
* curl for testing


<img width="948" alt="Screenshot 2025-06-20 175151" src="https://github.com/user-attachments/assets/395b9185-5c9c-45b8-9b25-476b7f73e8bc" />







