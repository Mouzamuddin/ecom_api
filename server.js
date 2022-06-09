const express = require('express')
const bodyParse = require('body-parser')
const configs = require('./config/serverconfig')
const categoryRoute = require('./routes/category.routes')
const productRoutes = require('./routes/products.routes')
const product = require('./models/product')
const authRoute = require('./routes/auth.routes')
const cartRoutes = require('./routes/cart.routes');
const db = require('./models/index');

const app = express()

const Categories = require('./models/index').Categories;
const Product = require('./models/index').Product
const db = require('./models/index');

app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())

categoryRoute(app);
productRoutes(app);
authRoute(app);
cartRoutes(app);



app.get('/home', async function (req, res) {
  const getCategory = await Categories.findAll({ include: product });
  res.json(getCategory);
})

app.listen(configs.PORT, async () => {
  console.log('Server started on PORT', configs.PORT);
  // const newProduct = await Product.create({
  //     name: 'Ipad',
  //     cost: 100000,
  //     description: 'apple ipad',
  //     categoryId: 1
  // });
  // console.log("product created successfully");

  //await db.sequelize.sync({ force:true})
  if(process.env.SYNC) {
    await db.sequelize.sync({ force: true });
}
}); 
