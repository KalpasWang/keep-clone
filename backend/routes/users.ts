import express from 'express';
import userModel from '../models/userModel';
import { SALT_ROUNDS } from '../utils/constants';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    await userModel.create({ username, email, password: hashedPassword });
    return res.status(201).send({ message: 'user created' });
  } catch (error) {
    return res.status(500).send({ message: 'user creation failed' });
  }
});

export default router;
