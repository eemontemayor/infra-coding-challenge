const axios = require('axios');
const faker = require('faker');
const colors = require('colors');
const Table = require('cli-table3');
const autocannon = require('autocannon');

const URL = process.env.URL || 'http://localhost:9000';

let [ numConnections, duration ] = process.argv.slice(2);
numConnections = parseInt(numConnections) || 10;

duration = parseInt(duration) || '45s';

(async () => {
    try {
        await axios.get(`${URL}/health`);
    } catch (error) {
        console.log('API is not responsive. Start API and try again');
        process.exit(0);
    }
    
    await axios.delete(`${URL}/collections`);
    
    const instance = autocannon({
        title: 'Benchmark',
        connections: numConnections,
        duration: duration,
        url: `${URL}/users`,
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
     });


     instance.on('response', client => {
        client.setBody(generateRequestBody());
     });

     instance.on('done', results => {
        const color = colors.cyan;
        
        const head = ['# requests sent','# non-2xx','# errors','# timeouts'];
        const table = new Table({ head: head.map(h => color(h)) });
        table.push([results.requests.sent, results.non2xx, results.errors, results.timeouts])
        
        console.log(table.toString());
     });

     
     autocannon.track(instance);
})();

function generateRequestBody() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    
    return JSON.stringify({
        firstName,
        lastName,
        email: faker.internet.email(firstName, lastName),
        password: faker.internet.password(8),
        username: faker.internet.userName()
    });
}