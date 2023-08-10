import mongoose from 'mongoose';
import { Express } from 'express';

async function connect(app: Express, mongodbUrl: string, port: number) {
  try {
    await mongoose.connect(mongodbUrl);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

export default connect;
