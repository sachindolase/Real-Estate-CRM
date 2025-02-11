import express from 'express';
import { addProperty, getProperties, updateProperty } from '../controllers/propertyController';

const router = express.Router();

router.post('/properties', addProperty);
router.get('/properties', getProperties);
router.put('/properties/:id', updateProperty);

export default router;


