const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();


router.get('/resources', (req, res) => {
    // retrieve a list of resources (GET /api/resources)
    Projects.getResource()
        .then(resources => {
            res.status(200).json({
                data: resources
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error Retrieving Resources",
                error
            })
        })
})

router.post('/resources', (req, res) => {
    // add resources (POST /api/resources)
    const resource = req.body
    Projects.addResource(resource)
        .then(info => {
            res.status(201).json({
                data: info
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error adding resource",
                error
            })
        })
})


module.exports = router;