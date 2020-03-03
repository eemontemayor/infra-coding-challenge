// const mongo = require('../clients/mongo');
// const { sleep, generateRandomNum } = require('../utils');

// const userService = {
    


//     createUser(newUser) { 
//         mongo.user.create({
//             firstName: newUser.firstName,
//             lastName: newUser.lastName,
//             email: newUser.email,
//             username: newUser.username,
//             password: newUser,password
//         })


//     },
    
//     async somethingSlow(userID) {
//         await mongo.user.updateOne({ _id: userID }, { $set: { processed: true } });
        
//         const sleepSeconds = generateRandomNum(5,15);
//         return await sleep(sleepSeconds * 1000);
//     },

// }
// module.exports= userService