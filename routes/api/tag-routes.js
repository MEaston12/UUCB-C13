const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: [{
      model: Product,
      through: {attributes: []}
    }]
  });
  res.json(tags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findOne({
    where: {id: req.params.id},
    include: [{
      model: Product,
      through: {attributes: []}
    }]
  });
  res.json(tag);
});

router.post('/', async (req, res) => {
  // create a new tag
  res.json(await Tag.create(
    {tag_name: req.body.tag_name}
  ));
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  res.json(await Tag.update(
    {tag_name: req.body.tag_name},
    {where: {id: req.params.id}}
  ));
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  res.json(await Tag.destroy(
    {where: {id: req.params.id}}
  ));
});

module.exports = router;
