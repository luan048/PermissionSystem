const {project, users} = require('./data.js')
const { canViewProject, canDeleteProject } = require('./permissions/viewProject')

function setUser(req, res, next) {
    const userId = req.body.userId
    if(userId) {
        req.user = users.find(user => user.id === userId)
    }

    next()
}

function authUser(req, res, next) {
    if (req.user === null || req.user === undefined) {
        res.status(403)
        return res.send('You need to sign in')
    }

    next()
}

function authRole(role) {
    return (req, res, next) => {
        if(req.user.role !== role) {
            res.status(401)
            return res.send('Not allowed')
        }

        next()
    }
}

function setProject(req, res, next) {
    const projectId = parseInt(req.params.projectId)
    req.project = project.find(project => project.id === projectId)

    if(req.project == null) {
        res.status(404)
        return res.send('Project not found')
    }
    next()
}

function authGetProject(req, res, next) {
    if (!canViewProject(req.user, req.project)) {
        res.status(401)
        return res.send('Not allowed')
    }

    next()
}

function authDeleteProject(req, res, next) {
    if(!canDeleteProject(req.user, req.project)) {
        res.status(401)
        return res.send('Not allowed')
    }

    next()
}

module.exports = {
    setUser,
    authUser,
    authRole,
    setProject,
    authGetProject,
    authDeleteProject
}