import express from 'express';
import cors from 'cors';
import leadRoutes from './routes/leadRoutes';
import propertyRoutes from './routes/propertyRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', leadRoutes);
app.use('/api', propertyRoutes);

export default app;

