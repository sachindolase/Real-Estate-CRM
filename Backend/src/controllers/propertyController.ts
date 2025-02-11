import { Request, Response } from 'express';
import Property from '../models/Property';

export const addProperty = async (req: Request, res: Response) => {
  try {
    const { type, size, location, budget, availability } = req.body;
    const property = new Property({ type, size, location, budget, availability });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getProperties = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search = '', availability } = req.query;
    const filter: any = {
      $or: [
        { type: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
      ],
    };
    if (availability) filter.availability = availability === 'true';
    const properties = await Property.find(filter)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));
    res.status(200).json(properties);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const updateProperty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type, size, location, budget, availability } = req.body;
    const property = await Property.findByIdAndUpdate(
      id,
      { type, size, location, budget, availability },
      { new: true }
    );
    res.status(200).json(property);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
