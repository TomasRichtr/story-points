import express from 'express'
import requestMiddleware from '../middleware/request.middleware'
import userController from '../controllers/user.controller'

const routerController = express.Router()

// user
routerController.get('/users', requestMiddleware(userController.getUsers))
routerController.post('/user', requestMiddleware(userController.createUser))
routerController.put('/user/:id', requestMiddleware(userController.updateUser))
routerController.delete('/user/:id', requestMiddleware(userController.deleteUser))

export default routerController
