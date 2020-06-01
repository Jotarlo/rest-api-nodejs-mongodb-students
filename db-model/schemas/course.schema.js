/** importing packages */
const mongoose = require('mongoose');

/** Schema instance */
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require("mongoose-unique-validator");

/** Course Schema Definition */
let courseSchema = new Schema({
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
    studentsAmountLimit: {
        type: "Number",
        unique: false,
        required: true,
        min: 1,
        max: 50
    }
},
{
    timestamps: true
});

courseSchema.plugin(mongooseUniqueValidator);
module.exports = courseSchema;