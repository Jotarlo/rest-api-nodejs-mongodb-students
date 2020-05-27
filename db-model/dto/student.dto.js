/** importing packages */
const mongoose = require('mongoose');
const db = require('../database');
let studentSchema = require('../schemas/student.schema');

/** Start db connection */
db();

/** CRUD operations for student schema */
studentSchema.statics = {
    getAll: function(query, cb){
        this.find(query, cb);
    },
    getByCode: function(query, cb){
        this.find(query, cb);
    },
    create: function(data, cb){
        let student = new this(data);
        student.save(cb);
    },
    update: function (query, newData, cb){
        this.findOneAndUpdate(query, {$set: newData}, {new: true}, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query, cb);
    }
};

let studentDTO = mongoose.model("student", studentSchema);
module.exports = studentDTO;