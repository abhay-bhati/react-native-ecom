const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    creationAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  });

const productSchema = Schema(
    {
        email: {type:String, unique: true, required: true},
        password: {type: String, unique: true, required: true},
        title: {type:String, unique:true, required:true},
        price:{type:Number, unique:false, required:true},
        description:{type:String, unique:false, required:true},
        images:[{type:String, unique:false, required:false}],
        creationAt:{type:String, unique:false, required:true},
        updatedAt:{type:String, unique:false, required:true},
        category: {type: categorySchema, unique:false, required:true}
    }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
