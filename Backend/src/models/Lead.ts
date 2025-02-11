import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  name: string;
  phoneNumber: string;
  documents: string[];
}

const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  documents: { type: [String], default: [] },
});

export default mongoose.model<ILead>('Lead', LeadSchema);


