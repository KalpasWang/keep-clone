import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    console.log(result);
    if (!result.success) {
      return res.status(400).send(result.error.issues);
    }
    next();
  };

export default validator;
