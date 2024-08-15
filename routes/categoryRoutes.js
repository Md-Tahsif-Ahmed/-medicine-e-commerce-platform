const express = require('express');
const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, authorize('admin', 'super admin'), createCategory)
  .get(getCategories);

router.route('/:id')
  .put(protect, authorize('admin', 'super admin'), updateCategory)
  .delete(protect, authorize('admin', 'super admin'), deleteCategory);

module.exports = router;
