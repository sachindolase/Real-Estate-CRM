
import { Request, Response } from 'express';
import Lead from "../models/Lead";


export const createLead = async (req: Request, res: Response) => {
    try {
        const { name, phoneNumber } = req.body;
        const lead = new Lead({ name, phoneNumber });
        await lead.save();
        res.status(201).json(lead);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getLeads = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, search = '' } = req.query;
        const leads = await Lead.find({
            $or: [
                { name: { $regex: search, $options: 'i' } },
                { phoneNumber: { $regex: search, $options: 'i' } },
            ],
        })
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit));
        res.status(200).json(leads);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const updateLead = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, phoneNumber } = req.body;
      const lead = await Lead.findByIdAndUpdate(id, { name, phoneNumber }, { new: true });
      res.status(200).json(lead);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };

