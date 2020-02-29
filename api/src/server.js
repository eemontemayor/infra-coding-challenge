const express = require('express');
const bodyParser = require('body-parser');
const UserService = require('./user-service')
const mongo = require('./clients/mongo');
const { sleep, generateRandomNum } = require('./utils');

const server = express();

server.use(bodyParser.json());

server.get('/health', (_, res) => {
    return res.sendStatus(204);
});
// server.post('/users', async (req, res) => {
//     const user = await mongo.user.create(req.body);
//     await somethingSlow(user._id);
    
//     return res.status(200).json(user);
// });




server.post('/users', async (req, res) => {
    const {firstName, lastName, email, username,password } = req.body
    
    const newUser = {firstName, lastName, email, username,password }


    // Check for fields
    for (const [key, value] of Object.entries(newUser)) {
        if (!value) {
        return res.status(400).json({
            error: `Missing ${key} in request body`
        });
        }
    }


    try {
        
        const user = await mongo.user.create(newUser);
    
        // await UserService.createUser(newUser)
   
    
         somethingSlow(user._id);
        
        return res
                .status(200)
                 .json(user);
        
    } catch (error) {
        
            res.status(401).json({ error: 'Unauthorized request' });
    }
});





async function somethingSlow(userID) {
    await mongo.user.updateOne({ _id: userID }, { $set: { processed: true } });
    
    const sleepSeconds = generateRandomNum(1,5);
    return await sleep(sleepSeconds * 1000);
}

server.delete('/collections', async (req, res) => {
    await mongo.flushCollections();
    return res.sendStatus(200);
});

module.exports = server;