const server = require('./server');
const mongo = require('./clients/mongo');

(async () => {
    await mongo.connect();
    await mongo.flushCollections();
    
    server.listen(9000, () => {
        console.log('server listening on port 9000');
    });
})();