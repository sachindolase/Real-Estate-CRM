import mongoose, { Schema, Document } from "mongoose";

export interface isProperty extends Document {
    type: 'Residential' | 'Commercial' | 'Land';
    size: string;
    location: string;
    budget: number;
    availability: boolean;
}

const PropertySchema: Schema = new Schema({
    type: { type: String, required: true, enum: ['Residential', 'Commercial', 'Land'] },
    size: { type: String, required: true },
    location: { type: String, required: true },
    budget: { type: Number, required: true },
    availability: { type: Boolean, default: true },
});

export default mongoose.model<isProperty>('Property', PropertySchema);

