const express = require('express');
const app = express();
const mockData = require('./jobs_mockdata/jobs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/get_jobs', function (req, res) {
    res.type('application/json').send(mockData);
});

app.listen(3000);