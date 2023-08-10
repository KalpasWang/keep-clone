import { cleanEnv } from 'envalid';
import { port, str } from 'envalid/dist/validators';

export default () => {
  return cleanEnv(process.env, {
    PORT: port(),
    MONGO_URI: str(),
    NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
  });
};
