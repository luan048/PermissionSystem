const express = require('express')
const server = express()
const {ROLE} = require('./data.js')
const {authUser, authRole, setUser} = require('./basicAuth.js')
const projectRouter = require('./routes/projectsRoutes.js')

server.use(express.json())
server.use(setUser)
server.use('/projects', projectRouter)

server.get('/', (req, res) => {
    res.send('Home Page')
})

server.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard Page')
})

server.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.send('Admin Page')
})

server.listen(3000)