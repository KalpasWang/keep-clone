import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../utils/constants';
import { User } from '../schemas/userSchema';
import userModel from '../models/userModel';

export async function createUser(userInput: User) {
  const { username, email, password } = userInput;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  await userModel.create({ username, email, password: hashedPassword });
}
