const fs = require('fs');
const path = require('path');

const port = process.env.PORT;
const baseUrl = process.env.BACKEND_URL;
console.log(`Backend URL - ${baseUrl}`);

module.exports = (root) => {

    root.get('/api/get_jobs', (request, response) => {
        if (port === '1234') {
            console.log("good");
            fs.readFile(
                path.resolve(__dirname, 'jobs.json'),
                { encoding: 'utf8' },
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        }
    })
};
