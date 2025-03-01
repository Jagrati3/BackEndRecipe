// Import required modules
 // Import Express framework
const express = require("express")
// Import Mongoose for MongoDB connection
const mongoose = require("mongoose")
// Load environment variables from .env file
require("dotenv").config()
//add the user 
const User=require('./models/User')
// Import bcrypt for password hashing
const bcrypt=require('bcryptjs')
//create app create Express application
const app = express()
const PORT = 3000
//include middele ware 
app.use(express.json());

//Home page api
app.get('/',(req, res)=>{
    res.send("<h1 align=center>Welcome to the MERN stack week 2 session</h1>")
})


//Registration page api

app.post('/register',async(req, res)=>{
    const {username,email,password}=req.body
    try{
        const hashedPassword= await bcrypt.hash(password,10)
        const user=new User({username,email,password:hashedPassword})
        await user.save()
        res.json({message: "User Registred.."})
        console.log("User Registration completed...")
    }
    catch(err)
    {                                                                                                                                    
        console.log(err)
    }
})

//Login page api

app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) 
            {
             return res.status(400).json({ message: "Invalid Credentials wrong email" });
            }
          res.json({ message: "Login Successful", username: user.username });
    }
    catch(err)
    {
        console.log(err)
    }
})

//connect the database
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DataBase is connected successfully!"))
  .catch((err) => console.log(err));
// check server is running or not
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running successfully! on PORT" + PORT);
});
