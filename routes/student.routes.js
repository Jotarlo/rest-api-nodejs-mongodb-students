
let controller = require('../controllers/student.controller')

module.exports = (app) => {

    app.get('/api/student/getall', (req, res, next) => {
        controller.getAllStudents(req, res, next);
    });

    app.get('/api/student/getbycode/:code', (req, res, next) => {
        controller.getByCode(req, res, next);
    });

    app.get('/api/student/getbycourse/:course', (req, res, next) => {
        controller.getByCourse(req, res, next);
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
}