const models = require('./models');
const mongoose = require('mongoose');
const { sleep } = require('../../utils');

// tell mongoose to use the native Promise implementation
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

let connected = false;
let connecting = false;

async function connect(hostname = 'mongo', db = 'challenge') {
    while (connecting) {
        await sleep(200);
    }

    if (connected) {
        return;
    }

    connecting = true;

    while (!connected) {
        try {
            const connectionString = `mongodb://${hostname}:27017/${db}`;
            await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
            
            connected = true;
            connecting = false;
        } catch (e) {
            log.info('mongo client failed to connect. Retrying in 1s.');
            await sleep(1000);
        }
    }
}

/**
 * disconnects from mongo
 */
async function disconnect() {
    while (connecting) {
        await sleep(200);
    }

    if (!connected) {
        log.info('mongo already disconnected. ignoring');
        return;
    }

    await mongoose.disconnect();

    connected = false;

    log.info('mongo disconnected');
}

/**
 * deletes all documents in every collection
 */
let flushCollections = async function () {
    for (let key in models) {
        await models[key].deleteMany({});
    }
};

module.exports = {
    connect,
    disconnect,
    flushCollections,
    ...models
};