/** importing packages  */
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

/** App configuration */
const app = express();

/** Parser */
let bodyParserJSON = bodyParser.json();
let bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

/** REST api methods */
let controller = require('./controllers/student.controller')

app.get('/', (req, res) => {
    res.send('Welcome to express server in web programming.');
});

app.get('/api/student/getall', (req, res, next) => {
    controller.getAllStudents(req, res, next);
});

app.get('/api/student/getbycode/:code', (req, res, next) => {
    controller.getByCode(req, res, next);
});

app.post('/api/student/create', (req, res, next) => {
    controller.createStudent(req, res, next);
});

app.put('/api/student/update', (req, res, next) => {
    controller.updateStudent(req, res, next);
});

app.delete('/api/student/delete', (req, res, next) => {
    controller.removeStudent(req, res, next);
});

/** Server start */
let port = config.get('server-port');
app.listen(port, () => {
    console.log(`Express server is running in port ${port}`);
});