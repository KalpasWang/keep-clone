import express from 'express';
import validator from '../middlewares/validator';
import { UserSchema } from '../schemas/userSchema';
import * as UserController from '../controllers/userController';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/', validator(UserSchema), UserController.createUser);

export default router;
