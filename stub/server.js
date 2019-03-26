const fs = require('fs');
const path = require('path');


console.log('port', process.env.PORT);
const port = process.env.PORT;

module.exports = (root) => {

    root.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    root.get('/api/get_jobs', (request, response) => {
        if (port === '1234') {
            fs.readFile(
                path.resolve(__dirname, 'jobs.json'),
                { encoding: 'utf8' },
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        } else{
            fs.readFile(
                path.resolve(__dirname, 'jobs.json'),
                { encoding: 'utf8' },
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        }


    })

}
