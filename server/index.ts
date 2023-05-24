import express, {  Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { register, login, getAll,addToCart} from "./routes/user";
import products from "./routes/products";
import Help from "./routes/help";
import cors from 'cors';


const app  = express();
app.use(cors());
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json());
app.use("/user",getAll)
app.post("/register", register);
app.post("/login", login);
app.post("/add",addToCart);
app.use("/product", products);
app.use("/help",Help);


mongoose
.connect("mongodb+srv://mongo:rootroot@mydatabase1.ihaxueo.mongodb.net/zara")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });


app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
