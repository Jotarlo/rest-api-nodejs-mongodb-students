/** importing packages */
const mongoose = require('mongoose');
const db = require('../database');
let courseSchema = require('../schemas/course.schema');

/** Start db connection */
db();

/** CRUD operations for course schema */
courseSchema.statics = {
    getAll: function(query, cb){
        this.find(query, cb);
    },
    getByCode: function(query, cb){
        this.find(query, cb);
    },
    create: function(data, cb){
        let course = new this(data);
        course.save(cb);
    },
    update: function (query, newData, cb){
        this.findOneAndUpdate(query, {$set: newData}, {new: true}, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query, cb);
    }
};

let courseDTO = mongoose.model("coll_course", courseSchema);
module.exports = courseDTO;