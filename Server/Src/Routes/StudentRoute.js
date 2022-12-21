const Studentdata = require('../Schema/StudentSchema');
const express = require('express');
require('dotenv').config()
const Path = express.Router()

//Conform To work API;
Path.get('/',(req,res)=>{
    res.send('<h1>Starting....<h1/>')
})

//Get all data; Postman checked
Path.get('/AllStudent', (req, res) => {
    try {
        Studentdata.find().then((data) => {
            res.status(201).json(data)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})
//User registration
Path.post('/Newstudent',(req, res) => {
    try {
        let inward = new Studentdata(req.body);
    inward.save().then(()=>{
        res.json({ Message: "New Student add Successfully" })
    })
    } catch (error) {
        res.status(500).json({Message:'Something Went wrong'})
    }
})


//View Data; Postman Check
Path.get('/ViewStudent/:id', async (req, res) => {
    try {
        let Data = req.params.id;
        let data = await Studentdata.findOne({ _id: Data })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Edit student data; Postman Check
Path.put('/UpdateStudent/:id', async (req, res) => {
    try {
        let Data = req.params.id;
        let Update = req.body;
        await Studentdata.findByIdAndUpdate(Data, Update, { new: true }).then(() => {
            res.status(201).json({ Message: 'Update Done' })
        })

    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete Student Data;
Path.delete('/DeleteStudent/:id', async (req, res) => {
    try {
        let data = req.params.id;
        await Studentdata.findOneAndDelete({ _id: data })
        res.status(200).json({ Message: "Delete Done" })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = Path