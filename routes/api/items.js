const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/allcourses', (req, res) =>{
    fs.readFile('database.json', (err, data) =>{
        const courses = JSON.parse(data);
        res.json(courses);
    });
})

router.get('/course', (req, res) => {
    fs.readFile('database.json', (err, data) => {
        const courses = JSON.parse(data);
        courses.filter(name =>{
            return name.name == req.query.course;
        })
        res.json(courses);
    });
})

module.exports = router;