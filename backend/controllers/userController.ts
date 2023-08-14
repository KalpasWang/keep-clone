import { Request, Response } from 'express';
import * as UserService from '../services/userService';

export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    await UserService.createUser({ username, email, password });
    return res.status(201).send({ message: 'user created' });
  } catch (error) {
    return res.status(500).send({ message: 'user creation failed' });
  }
}
