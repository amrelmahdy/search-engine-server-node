const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: String,
    image: {
        type: String,
        default: "default.png",
    },
    price: Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        autopopulate: true
    },
    brand: String,
});



productSchema.index({
    name: 'text',
    brand: 'text',
    "category.name": "text",
});


// productSchema.index({ '$**': 'text' });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;