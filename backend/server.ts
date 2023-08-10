import dotenv from 'dotenv';
import path from 'path';
import setCleanEnv from './utils/setCleanEnv';
import connect from './utils/connect';
import app from './app';

dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}.local`),
});
const env = setCleanEnv();
connect(app, env.MONGO_URI, env.PORT);
