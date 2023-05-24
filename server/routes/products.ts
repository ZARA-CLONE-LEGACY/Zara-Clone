import express, { Request, Response } from "express";
import Products from "../models/products";
import { authenticate ,authorizeAdmin } from "../auth";
const router = express.Router();

//-----------------------------get all product---------------------------------
router.get("/", async (req: Request, res: Response) => {
  try {
    const clothes = await Products.find();
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
//--------------------get product by name--------------------------- 
router.get("/:name", async (req: Request, res: Response) => {
  try {
    const clothes = await Products.findOne({name:req.params.name });
    if (!clothes) {
      return res.status(404).json({error: "product not found" });
    }
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
//--------------------get product by gender------------------------------------

router.get("/gender/:gend", async (req: Request, res: Response) => {
  try {
    const clothes = await Products.findOne({gender:req.params.gend});
    if (!clothes) {
      return res.status(404).json({ error: "product not found"  });
      
    }
    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json({error: "product not found" });
  }
});

//--------------------get product by category----------------------------------
router.get("/category/:cat", async (req: Request, res: Response) => {
  try {
    const clothes = await Products.findOne({ category:req.params.cat});
    if (!clothes) {
      return res.status(404).json({ error: "product not found" });
    }
    res.json(clothes);
  } catch (error) {
    res.status(500)
  }
});
//--------------------get product by color----------------------------------
router.get("/color/:col", async (req: Request, res: Response) => {
  try {
    const clothes = await Products.findOne({ color:req.params.col});
    if (!clothes) {
      return res.status(404).json({ error: "product not found"  });
    }
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
//-------------------post product---------------------------------------------- 
router.post("/", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { image, name, quantity, price, gender, category, color } = req.body;
    const clothes = await Products.create({ image, name, quantity, price, gender, category, color });
    res.status(201).json(clothes);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

//--------------------update product---------------------------------------------------
router.put("/:id", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { image, name, gen, price, desc } = req.body;
    const clothes = await Products.findByIdAndUpdate(id, { image, name, gen, price, desc }, { new: true });
    if (!clothes) {
      return res.status(404).json({ error: "product not found" });
    }
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//----------------------------- delete product -------------------------------------------------------
router.delete("/:id", authenticate, authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clothes = await Products.findByIdAndDelete(id);
    if (!clothes) {
      return res.status(404).json({ error: "product not found"  });
    }
    res.json({ message: "clothes deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


export default router;
