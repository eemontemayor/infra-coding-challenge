const express = require('express')
const mongo = require('../clients/mongo');
const userRouter = express.Router()
const jsonBodyParser = express.json()
mongo.Promise = global.Promise


serializeUser = user => ({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    username: user.username,
    password: user,password
})

userRouter  
    .route('/')
    .post(jsonBodyParser, async (req, res) => {

        const {firstName, lastName, email, username,password } = req.body
    
        const newUser = {firstName, lastName, email, username,password }

            
            let user = userService.createUser(newUser)
              
            userService.somethingSlow(user._id);
        
        
                user
                .then(user => res.status(201).json(serializeUser(user)))
                .catch(err => {
                  console.error(err);
                  res.status(500).json({ message: "Internal server error" });
                });

 
    })
module.exports = userRouter