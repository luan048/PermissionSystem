const express = require('express')
const router = express.Router()
const { project } = require('../data.js')
const { authUser, setProject, authGetProject, authDeleteProject } = require('../basicAuth.js')
const {scopedProjects} = require('../permissions/viewProject.js')

router.get('/', authUser, (req, res) => {
    res.json(scopedProjects(req.user, project))
})

router.get('/:projectId', setProject, authUser, authGetProject, (req, res) => {
    res.json(req.project)
})

router.delete('/:projectId', setProject, authUser, authDeleteProject, (req, res) => {
    res.send('Deleted Project')
})

module.exports = router