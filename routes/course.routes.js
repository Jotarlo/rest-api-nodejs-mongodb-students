/** controller import */

let controller = require('../controllers/course.controller');


module.exports = (express) => {
    let router = express.Router();

    router.get('/getall', (req, res, next) => {
        controller.getAllCourses(req, res, next);
    });

    router.get('/getbycode/:code', (req, res, next) => {
        controller.getByCode(req, res, next);
    });

    router.post('/create', (req, res, next) => {
        controller.createCourse(req, res, next);
    });

    router.put('/update', (req, res, next) => {
        controller.updateCourse(req, res, next);
    });

    router.delete('/delete', (req, res, next) => {
        controller.removeCourse(req, res, next);
    });
    
    return router;
}
