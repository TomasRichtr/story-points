import express from 'express';
import requestMiddleware from '../middleware/request.middleware';
import userController from '../controllers/user.controller';
import teamController from "./team.controller";
import storyPointSetController from "./storyPointSet.controller";

const routerController = express.Router();

// user
routerController.get('/users', requestMiddleware(userController.getUsers));
routerController.post('/user', requestMiddleware(userController.createUser));
routerController.patch('/user/:id', requestMiddleware(userController.updateUser));
routerController.delete('/user/:id', requestMiddleware(userController.deleteUser));

// team
routerController.get('/teams', requestMiddleware(teamController.getTeams));
routerController.post('/team', requestMiddleware(teamController.createTeam));
routerController.patch('/team/:id', requestMiddleware(teamController.updateTeam));
routerController.delete('/team/:id', requestMiddleware(teamController.deleteTeam));

// storyPointSet
routerController.get('/story-point-sets', requestMiddleware(storyPointSetController.getStoryPointSets));
routerController.post('/story-point-set', requestMiddleware(storyPointSetController.createStoryPointSet));
routerController.patch('/story-point-set/:id', requestMiddleware(storyPointSetController.updateStoryPointSet));
routerController.delete('/story-point-set/:id', requestMiddleware(storyPointSetController.deleteStoryPointSet));

export default routerController;
