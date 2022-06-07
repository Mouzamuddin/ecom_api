const Category = require('../../models/index').Category
const CategoryService = require('../../services/categoryService') 

test('get all categories should return categories', async() => {
    const response = [{name: 'electronics'},{name: 'kitchenware'}];
    const spy = jest.spyOn(Category, 'findAll').mockImplementation(() => {
        return response
    })
    await CategoryService.getAllCategories();
    expect(spy).toHaveBeenCalled()
})

test('create category and return new category', async() => {
    const data = {name: 'electronics'}
    const response = [{name: 'electronics'}]
    const spy = jest.spyOn(Category, 'create').mockImplementation(() => {
        return response
    })
    await CategoryService.createCategory(data);
    expect(spy).toHaveBeenCalled()
})