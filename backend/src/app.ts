import express from 'express';
import userRoutes from './routes/users';

const app = express();

app.use('/api/users', userRoutes);

export default app;
