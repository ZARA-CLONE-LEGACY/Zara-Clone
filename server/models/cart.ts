import mongoose, { Document } from "mongoose";
import { UserDocument } from "./user";
import { ProductsDocument } from "./products";

export interface CartDocument extends Document {
  date: string;
  user: UserDocument;
  products: ProductsDocument[];
}

const cartSchema = new mongoose.Schema<CartDocument>(
  {
    date: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Cart = mongoose.model<CartDocument>("Cart", cartSchema);
export default Cart;
