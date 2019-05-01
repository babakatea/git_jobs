const fs = require('fs');
const path = require('path');

const port = process.env.PORT;

module.exports = (root) => {

    root.get('/api/get_jobs', (request, response) => {
        if (port === '1234') {
            fs.readFile(
                path.resolve(__dirname, 'jobs.json'),
                { encoding: 'utf8' },
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        }
    });

    root.get('/login', (request, response) => {
        if (port === '1234') {
            fs.readFile(
              // path.resolve(__dirname, 'jobs.json'),
              { encoding: 'utf8' },
              (err, data) => {
                  response.type('application/json').send(data)
              }
            )
        }
    });


};
