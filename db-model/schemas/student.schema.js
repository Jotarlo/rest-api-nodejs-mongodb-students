/** importing packages */
const mongoose = require('mongoose');

/** Schema instance */
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require("mongoose-unique-validator");

/** Student Schema Definition */
let studentSchema = new Schema({
    code: {
        type: "String",
        unique: true,
        required: true
    },
    name: {
        type: "String",
        unique: false,
        required: true
    },
    lastname: {
        type: "String",
        unique: false,
        required: true
    },
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: "coll_course"
    }],
    password:{
        type: "String",
        required: true
    }
},
    {
        timestamps: true
    });

studentSchema.plugin(mongooseUniqueValidator);
module.exports = studentSchema;