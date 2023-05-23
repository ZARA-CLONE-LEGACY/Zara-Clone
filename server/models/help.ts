import mongoose, { Schema, Document } from 'mongoose';

export interface Help extends Document {
    question: string;
    answer: string;
  }
  
  const Help: Schema = new Schema({
    question: String,
    answer: String,
  });

  const HelpModel = mongoose.model<Help>('help', Help);
  export default HelpModel;
