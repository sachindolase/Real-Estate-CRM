import express from 'express';
import { createLead, getLeads, updateLead } from '../controllers/leadController';

const router = express.Router();

router.post('/leads', createLead);
router.get('/leads', getLeads);
router.put('/leads/:id', updateLead);

export default router;


