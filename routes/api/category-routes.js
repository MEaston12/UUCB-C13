const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: [{
      model: Product,
      attributes: {exclude: ['category_id']}
    }]
  });
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findOne({
      where: {id: req.params.id},
      include: [{
        model: Product,
        attributes: {exclude: ['category_id']}
      }],
  });
  res.json(category);
});

router.post('/', async (req, res) => {
  // create a new category
  res.json(await Category.create(
    {category_name: req.body.category_name}
  ));
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  res.json(await Category.update(
    {category_name: req.body.category_name},
    {where: {id: req.params.id}}
  ));
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  res.json(await Category.destroy(
    {where: {id: req.params.id}}
  ));
});

module.exports = router;
