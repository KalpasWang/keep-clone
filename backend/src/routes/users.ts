import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/', (req, res) => {
  res.status(201).send();
});

export default router;
