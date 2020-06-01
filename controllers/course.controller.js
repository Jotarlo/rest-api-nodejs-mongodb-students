/** importing packages */
let courseDTO = require('../db-model/dto/course.dto');

/** Method to get all courses */
exports.getAllCourses = (req, res, next) => {
    courseDTO.getAll({}, (error, data) => {
        if (error) {
            res.json({
                responnse: 'KO',
                err: error
            });
        }
        res.json({
            response: 'OK',
            data: data
        });
    });
}


/** Method to get a course by code */
exports.getByCode = (req, res, next) => {
    courseDTO.getByCode({ code: req.params.code }, (error, data) => {
        if (error) {
            return res.json({
                responnse: 'KO',
                err: error
            });
        }
        res.json({
            response: 'OK',
            data: data
        });
    });
}

/** New course */
exports.createCourse = (req, res, next) => {
    let course = {
        code: req.body.code,
        name: req.body.name,
        studentsAmountLimit: req.body.studentsAmountLimit
    };

    courseDTO.create(course, (error, data) => {
        if (error) {
            return res.json({
                responnse: 'KO',
                err: error
            });
        }
        res.json({
            response: 'OK',
            data: data
        });
    });
}


/** Update course */
exports.updateCourse = (req, res, next) => {
    let course = {
        code: req.body.code,
        name: req.body.name,
        studentsAmountLimit: req.body.studentsAmountLimit
    };
    courseDTO.update({ _id: req.body.id }, course, (error, data) => {
        if (error) {
            return res.json({
                responnse: 'KO',
                err: error
            });
        }
        res.json({
            response: 'OK',
            data: data
        });
    });
}


/** Method to remove a course */
exports.removeCourse = (req, res, next) => {
    courseDTO.delete({ _id: req.body.id }, (error, data) => {
        if (error) {
            return res.json({
                responnse: 'KO',
                err: error
            });
        }
        res.json({
            response: 'OK'
        });
    });
}
