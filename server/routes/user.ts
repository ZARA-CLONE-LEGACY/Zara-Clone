import { Request, Response } from "express";
import User, { UserDocument } from "../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { SECRET_KEY } = process.env;

const generateToken = (user: UserDocument): string => {
  return jwt.sign({ user }, SECRET_KEY || "");
};
const getAll = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const addToCart=(req: Request, res: Response)=>{
  const {userId,productId}=req.body
  console.log(userId, productId);
  
  User.findByIdAndUpdate(userId,{$push:{cart:productId}}).then(data=>res.send(data))
}

const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { fname, lname, email, password } = req.body;
    console.log(req.body)

    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .send({ message: "Email already exists", status: false });
    }

    const is_admin = req.body.is_admin || false; 
    const newUser = new User({ fname, lname, email, password, is_admin });
    await newUser.save()

    const token = generateToken(newUser);
    return res.status(200).send({ user, token, status: true });
  } catch (err: any) {
    console.log(err)
    return res.status(400).send({ message: err.message });
  }
};

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .send({ message: "Wrong Email or Password", status: false });
    }

    const match = user.checkPassword(password);

    if (!match) {
      return res
        .status(400)
        .send({ message: "Wrong Email or Password", status: false });
    }

    const token = generateToken(user);

    return res.status(200).send({ user, token, status: true });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};

const isAdmin = (user: UserDocument): boolean => {
  return user.is_admin;
};

export { register, login, isAdmin, getAll,addToCart };
