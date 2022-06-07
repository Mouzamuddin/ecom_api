const ProductController = require('../controllers/product.controller')
const AuthValidator = require('../middelwares/authValidator')
const RequestValidator = require('../middelwares/requestValidator')
const AuthorizationValidator = require('../middelwares/authorizationValidator');

const routes = (app) => {
    app.get('/ecom/api/v1/products', ProductController.getProducts);
    app.get('/ecom/api/v1/products', AuthValidator.isAuthenticated, ProductController.getProducts);
    app.post('/ecom/api/v1/products',RequestValidator.validateProductCreationRequest ,ProductController.createProduct);
    app.post(
        '/ecom/api/v1/products', 
        RequestValidator.validateProductCreationRequest, 
        AuthValidator.isAuthenticated, 
        AuthorizationValidator.canAddProduct, 
        ProductController.createProduct
    );
}


module.exports = routes;