import express, { Request, Response } from "express";
import HelpModel from "../models/help"
const router = express.Router();


router.get("/", async (req: Request,res: Response)=> {
    try {
        const help = await HelpModel.find();
        res.json(help);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    })
    router.get("/:question", async (req: Request, res: Response) => {
        try {
          const helpQuestion = await HelpModel.findOne({ question : req.params.question });
          if (!helpQuestion) {
            return res.status(404).json({ error: "Question not found" });
          }
          res.json(helpQuestion);
        } catch (error) {
          res.status(500).json({ error: "Internal server error" });
        }
      });
      router.post("/",async(req:Request,res:Response)=>{
        const {question,answer} = req.body;

        const help = new HelpModel({question,answer});
        try {
          const newHelp = await help.save();
          res.json(newHelp);
          } catch (error) {
            res.status(500).json({ error: "Internal server error" })
          }
          
      })


export default router