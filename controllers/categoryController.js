const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  const { name, slug, thumbnail } = req.body;

  try {
    const category = await Category.create({ name, slug, thumbnail });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, slug, thumbnail } = req.body;

  try {
    const category = await Category.findByIdAndUpdate(id, { name, slug, thumbnail }, { new: true });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await Category.findByIdAndDelete(id);
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
