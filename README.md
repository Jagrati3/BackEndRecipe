*MERN Stack Authentication Backend*

## Project Structure
```
packed-recipe/
│── backend/
│   ├── Images/                # Folder for storing images
│   ├── models/                # Folder for database models
│   │   ├── User.js            # User model schema
│   ├── node_modules/          # Installed dependencies (auto-generated)
│   ├── .env                   # Environment variables file
│   ├── package.json           # Project configuration file
│   ├── package-lock.json      # Auto-generated dependency lock file
│   ├── server.js              # Main backend server file
│   ├── routes/                # Folder for API routes (future expansion)
│   ├── README.md              
```

## Setting Up the Backend with Express and MongoDB Atlas

STEP 1 
### Create a New Folder
BackendRecipe

### Initialize the Backend Folder
cd BackendRecipe 

STEP2 
### Create the Main Server File
with the name server.js

STEP 3 
### then do the npm init-y

### Install Dependencies
```sh
npm install express mongoose cors dotenv bcryptjs jsonwebtoken nodemon
```

STEP 4
#### Explanation of Dependencies
- **express**: Web framework for building APIs.
- **mongoose**: ORM for MongoDB.
- **cors**: Handle cross-origin requests.
- **dotenv**: Manage environment variables.
- **bcryptjs**: Secure password hashing.
- **jsonwebtoken**: Authentication via JWT.
- **nodemon**: Auto-restart server on code changes.

### Create a .env File
Create a `.env` file inside the `backend` folder and add your MongoDB Atlas URL:
```
MONGO_URL=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/yourDatabase?retryWrites=true&w=majority
PORT=3000
JWT_SECRET=your_secret_key
```

STEP 5 
### Start the Server
npm start

STEP 6 
Install MongoDB Atlas

Follow these steps to set up MongoDB Atlas:

Create a Cluster: Sign up for MongoDB Atlas and create a free cluster.

Database Access: Set up a username and password for database access.

Network Access: Set the network IP to 0.0.0.0/0 to allow access from any IP.
....................................................................................
### API Endpoints
#### User Registration
```http
POST /register
```
- **Body:** `{ "username": "JohnDoe", "email": "john@example.com", "password": "123456" }`

#### User Login
```http
POST /login
```
- **Body:** `{ "email": "john@example.com", "password": "123456" }`

### Connecting to MongoDB Atlas
Ensure you replace `yourUsername`, `yourPassword`, and `yourDatabase` in the `.env` file with actual credentials.

