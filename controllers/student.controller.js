/** importing packages */
let studentDTO = require('../db-model/dto/student.dto');
let helper = require("./helpers.controller")

/** Method to get all students */
exports.getAllStudents = (req, res, next) => {
    studentDTO.getAll({}, (error, data) => {
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


/** Method to get a student by code */
exports.getByCode = (req, res, next) => {
    studentDTO.getByCode({ code: req.params.code }, (error, data) => {
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


/** Method to get a set of student by course */
exports.getByCourse = (req, res, next) => {
    studentDTO.getByCourse({ subjects: req.params.course }, (error, data) => {
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

/** New student */
exports.createStudent = (req, res, next) => {
    let student = {
        code: req.body.code,
        name: req.body.name,
        lastname: req.body.lastname,
        subjects: req.body.subjects,
        password: helper.EncryptPasword(req.body.password)
    };

    studentDTO.create(student, (error, data) => {
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


/** Update student */
exports.updateStudent = (req, res, next) => {
    let student = {
        code: req.body.code,
        name: req.body.name,
        lastname: req.body.lastname,
        subjects: req.body.subjects,
        password: helper.EncryptPasword(req.body.password)
    };
    studentDTO.update({ _id: req.body.id }, student, (error, data) => {
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


/** Method to remove a student */
exports.removeStudent = (req, res, next) => {
    studentDTO.delete({ _id: req.body.id }, (error, data) => {
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
