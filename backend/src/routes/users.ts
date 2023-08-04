import express from 'express';
import userModel from '../models/userModel';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  try {
    await userModel.create({ username, email, password });
    return res.status(201).send({ message: 'user created' });
  } catch (error) {
    return res.status(500).send({ message: 'user creation failed' });
  }
});

export default router;
