const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT;

module.exports = (root) => {
  root.use(bodyParser());

  root.get('/get_jobs', (request, response) => {
    if (port === '1234') {
      fs.readFile(
        path.resolve(__dirname, 'jobs.json'),
        {encoding: 'utf8'},
        (err, data) => {
          response.type('application/json').send(data)
        }
      )
    }
  });

  root.post('/login', (request, response) => {
    if (port === '1234') {
      console.log(request.body);
      if (request.body.email === 'superuser@gmail.com' && request.body.password === 'masterkey') {
        response.type('application/json').send('[{"token":"1"}]');
      } else {
        response.send("error");
      }
    }
  });


};
