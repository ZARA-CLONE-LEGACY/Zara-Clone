import mongoose, { Document } from "mongoose";
import { CartDocument } from "./cart";

export interface ProductsDocument extends Document {
  image: string;
  name: string;
  desc: string;
  price: string;
  quantity: Number;
  gender: String;
  category: String;
  color: String;
  comment: String;
  cart: CartDocument;

}

const productSchema = new mongoose.Schema<ProductsDocument>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    comment: { type: String, required: true },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Products = mongoose.model<ProductsDocument>("Products", productSchema);
export default Products;
