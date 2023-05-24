import express, { Request, Response } from "express";
import Products from "../models/products";
import { authenticate ,authorizeAdmin } from "../auth";
const router = express.Router();


router.get("/", async (req: Request, res: Response) => {
  try {
    const clothes = await Products.find();
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:&name", async (req: Request, res: Response) => {
  try {
    const clothes = await Products.findOne({ name : req.params.name });
    if (!clothes) {
      return res.status(404).json({ error: "clothes not found" });
    }
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { image, name, quantity, price, gender, category, color } = req.body;
    const clothes = await Products.create({ image, name, quantity, price, gender, category, color });
    res.status(201).json(clothes);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});


router.put("/:id", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { image, name, gen, price, desc } = req.body;
    const clothes = await Products.findByIdAndUpdate(id, { image, name, gen, price, desc }, { new: true });
    if (!clothes) {
      return res.status(404).json({ error: "clothes not found" });
    }
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


router.delete("/:id", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clothes = await Products.findByIdAndDelete(id);
    if (!clothes) {
      return res.status(404).json({ error: "clothes not found" });
    }
    res.json({ message: "clothes deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


export default router;
