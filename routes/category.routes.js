const CategoryController = require('../controllers/category.controller')
const validator = require('../middelwares/requestValidator');

const routes = (app) => {

    app.get('/ecom/api/v1/category' , CategoryController.getAllCategory);
    app.post('/ecom/api/v1/category',validator.validateCategoryCreationRequest, CategoryController.createCategory);
    app.delete('/ecom/api/v1/categories/:id', CategoryController.deleteCategory);
    app.put('/ecom/api/v1/categories/:id', CategoryController.updateCategory);
    app.get('/ecom/api/v1/categories/:id', CategoryController.getCategory);
    app.get('/ecom/api/v1/categories/getCategoryByName', CategoryController.getCategoryByName);

}

module.exports = routes