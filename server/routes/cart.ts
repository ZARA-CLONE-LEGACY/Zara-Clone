import express, { Request, Response } from "express";
import Cart from "../models/cart";
import { authenticate ,authorizeAdmin } from "../auth";

const router = express.Router();


router.get("/", async (req: Request, res: Response) => {
  try {
    const men = await Cart.find();
    res.json(men);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const men = await Cart.findById(id);
    if (!men) {
      return res.status(404).json({ error: "Men not found" });
    }
    res.json(men);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { image, name, gen, price, desc } = req.body;
    const men = await Cart.create({ image, name, gen, price, desc });
    res.status(201).json(men);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});


router.put("/:id", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { image, name, gen, price, desc } = req.body;
    const men = await Cart.findByIdAndUpdate(id, { image, name, gen, price, desc }, { new: true });
    if (!men) {
      return res.status(404).json({ error: "Men not found" });
    }
    res.json(men);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


router.delete("/:id", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const men = await Cart.findByIdAndDelete(id);
    if (!men) {
      return res.status(404).json({ error: "Men not found" });
    }
    res.json({ message: "Men deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
const searchString = String(query);
const results = await Cart.find({ $text: { $search: searchString } });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;