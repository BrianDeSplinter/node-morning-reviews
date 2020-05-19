const express = require('express')
const app = express()
const userCtrl = require('./controllers/userController')

const SERVER_PORT = 4002

app.use(express.json())

app.get('/api/users', userCtrl.getUsers)

app.get('/api/users/:user_id', userCtrl.getUsers)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))