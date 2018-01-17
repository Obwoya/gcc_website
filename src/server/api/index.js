import { Router } from 'express';
import Ministries from './Ministries';

const router = Router();
router.use('/modelData/Ministries', Ministries);

router.get('/pages/:page', (req, res) => {
  res.json({
    title: req.params.page,
    content: `You requested page ${req.params.page}`,
  });
});

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  next();
});

router.use('*', (req, res) => {
  const err = new Error('Bad Request');
  res.status(400);
  res.json({
    message: err.message,
    error: err,
  });
});

export default router;
