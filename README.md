*MERN Stack Recipe Backend*

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

STEP 4
### Install Dependencies
```sh
npm install express mongoose cors dotenv bcryptjs jsonwebtoken nodemon
```
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
### Install MongoDB Atlas

Follow these steps to set up MongoDB Atlas:

Create a Cluster: Sign up for MongoDB Atlas and create a free cluster.

Database Access: Set up a username and password for database access.

Network Access: Set the network IP to 0.0.0.0/0 to allow access from any IP.


STEP 7 
### Install the chrome extension : Talend API Tester-Free Edition
Ease of Use: It provides a user-friendly interface that simplifies the process of sending API requests and inspecting responses, even for those who might not be deeply technical.
To test your API endpoints easily, install the Talend API Tester - Free Edition Chrome extension. It helps in sending HTTP requests and viewing responses directly in the browser.
Install from the Chrome Web Store.
Open the extension and configure requests (GET, POST, PUT, DELETE).
Use it to test your authentication routes.


Step 8
### API Endpoints

User Registration
POST /register
Body: { "username": "JohnDoe", "email": "john@example.com", "password": "123456" }
User Login
POST /login
Body: { "email": "john@example.com", "password": "123456" }

STEP 9 
### To save project to GitHub:

Initialize Git:

git init

Add all files to the repository:

git add .

Commit your changes:

git commit -m "Initial commit"

Create a new repository on GitHub and copy the remote URL.

Add the remote repository:

git remote add origin <your-repo-url>

Push your code:

git push -u origin main

Now your backend code is successfully committed to GitHub!


STEP 10
### Do the Assignment (Create the database for create Recipe tab)

now i need to connect he database with the frontend page 

inside the navbar bar there is a create recipe section and we need to store its data into data base 

i couldn't do this because i don't have knowledge for MERN i tried but couldn't fix the code 

