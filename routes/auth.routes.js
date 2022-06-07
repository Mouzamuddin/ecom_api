const AuthController = require('../controllers/auth.controller')


const routes = (app) => {
    app.post('/ecom/signup', AuthController.signup);
    app.post('/ecom/signin', AuthController.signin);
    app.patch('/ecom/api/v1/user/:userId', AuthController.updateUser);
    app.get('/ecom/api/v1/user/:userId/getRoles', AuthController.getRolesForUser);
}

module.exports =routes