// inside of user.routes.js
const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get("/api/users/getloggedinuser", UserController.getLoggedInUser);
    app.get("/api/users/findallusers", UserController.findAllUsers);
    app.get('/api/logout', UserController.logout);
    app.get('/api/users/:id', UserController.findOneUser);
    app.put('/api/users/update/:id', UserController.updateUser);
}