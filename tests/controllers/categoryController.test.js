const CategoryServices = require('../../services/categoryService');
const CategoryController = require('../../controllers/category.controller');
const {mockResponse, mockRequest} = require('../mocker');
const { response } = require('express');

test('category controller should return list of categories', async () => {
    
    const req = mockRequest();
    const res = mockResponse();
    const response =  [{name: 'electronics'}, {name: 'Kitchenware'}];
    const spy = jest.spyOn(CategoryServices, 'getAllCategories').mockImplementation(() => {
        return response
    })

    await CategoryController.getAllCategory(req,res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message : 'successfully fetched the category',
        success : true,
        code: 200,
        data : response
    })

})

test('category controller should return success ', async () => {
    
     const req = mockRequest();
     const res = mockResponse();
     const response =  {id: 1, name: "new category"};
     const spy = jest.spyOn(CategoryServices, 'createCategory').mockImplementation(() => {
         return response
     })

     await CategoryController.createCategory(req,res);
     expect(spy).toHaveBeenCalled();
     expect(res.json).toHaveBeenCalledWith({
        message: 'successfully created a new category',
        success: true,
        code: 201,
        data: response
     })

})

test("category controller should delete a category", async() => {

    const req = mockRequest()
    const res = mockResponse()
    const spy = jest.spyOn(CategoryServices,'deleteCategory').mockImplementation(() => {
        return response;
    })

    await CategoryController.deleteCategory(req,res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully deleted a category',
        success: true,
        code: 200,
    })

})

//updateCategory

test("category controller should update a category", async() => {

    const req = mockRequest()
    const res = mockResponse()
    const spy = jest.spyOn(CategoryServices,'updateCategory').mockImplementation(() => {
        return response;
    })

    await CategoryController.updateCategory(req,res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully updated a category',
        success: true,
        code: 200,
        data: response
    })

})

test('category controller should fetch a selected category using ID', async () => {
    
    const req = mockRequest();
    const res = mockResponse();
    const response =  {id: 1, name: "category"};
    const spy = jest.spyOn(CategoryServices, 'getCategory').mockImplementation(() => {
        return response
    })

    await CategoryController.getCategory(req,res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message : 'successfully fetched selected category',
        success : 200,
        data : response 
    })

})

test('category controller should fetch a selected category using name', async () => {
    
    const req = mockRequest();
    const res = mockResponse();
    const response =  {id: 1, name: "category"};
    const spy = jest.spyOn(CategoryServices, 'getCategoryByName').mockImplementation(() => {
        return response
    })

    await CategoryController.getCategoryByName(req,res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message : 'successfully fetched selected category',
        success : 200,
        data : response 
    })

})