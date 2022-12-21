//Require
const mongoose = require('mongoose');

//Schema
const Student = new mongoose.Schema({
    Firstname :{
        type: String,
        required: true,
        collection: String
    },
    Lastname :{
        type: String,
        required: true,
    },
    Location:{
        type: String,
        required : true
    },
    Email:{
        type: String,
        required : true
    },
    DOB:{
        type: Date,
        required : true
    },
    Education:{
        type: String,
        required : true
    },
    About:{
        type: String,
        required : true
    }

},{timestamps : true})

//Export;
module.exports = mongoose.model('Users',Student,"Student_Data");

