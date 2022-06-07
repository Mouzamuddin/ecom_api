
const validateCategoryCreationRequest = (req, res, next) => {
    if(!req.body.name) {
        return res.json({
            success: false,
            code: 400,
            message: 'Name of the category is not present'
        });
    }
    next();
}

const validateProductCreationRequest = (req, res ,next) => {
    if(!req.body.name || !req.body.cost || !req.body.categoryId ) {
        return res.json({
            success: false,
            code: 400,
            message: 'Product creation attributes are missing'
        })
    }
    next()
}

module.exports = {
    validateCategoryCreationRequest,
    validateProductCreationRequest 
} 