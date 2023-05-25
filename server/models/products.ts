import mongoose, { Document } from "mongoose";

export interface ProductsDocument extends Document {
[x: string]: any;
  image: string;
  name: string;
  price: string;
  quantity: Number;
  gender: String;
  category: String;
  description:String;

}

const productSchema = new mongoose.Schema<ProductsDocument>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Products = mongoose.model<ProductsDocument>("Products", productSchema);
export default Products;
