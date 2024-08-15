const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  photos: [{ type: String }],
  price: { type: Number, required: true },
  discount: { type: Number },
  stockStatus: { type: Boolean, default: true },
  status: { type: Boolean, default: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  variants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Variant' }]
});

module.exports = mongoose.model('Product', productSchema);
