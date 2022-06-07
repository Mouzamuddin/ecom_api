const categoryService = require('../services/categoryService')

const getAllCategory = async(req,res) => {


    const response = await categoryService.getAllCategories();

    return res.json({
        message : 'successfully fetched the category',
        success : true,
        code: 200,
        data : response 
    })

}


const createCategory = async (req,res) => {
    const response = await categoryService.createCategory(req.body);
    return res.json({
        message: 'successfully created a new category',
        success: true,
        code: 201,
        data: response
    })
}

const deleteCategory = async (req,res) => {
    // console.log(req.params);
    await categoryService.deleteCategory(req.params.id);
    return res.json({
        message: 'Successfully deleted a category',
        success: true,
        code: 200,
    })
}

const updateCategory = async (req, res) => {
    const response = await categoryService.updateCategory(req.params.id, req.body);
    return res.json({
        message: 'Successfully updated a category',
        success: true,
        code: 200,
        data: response
    });

}

const getCategory = async(req,res) => {
    const response = await categoryService.getCategory(req.params.id)
    return res.json({
        message : 'successfully fetched selected category',
        success : 200,
        data : response 

    })
}
 
const getCategoryByName = async(req,res) => {
    const response = await categoryService.getCategoryByName(req.params.name)
    return res.json({
        message : 'successfully fetched selected category',
        success : 200,
        data : response
    })
}

module.exports = {

    getAllCategory,
    createCategory,
    deleteCategory,
    updateCategory,
    getCategory,
    getCategoryByName

}