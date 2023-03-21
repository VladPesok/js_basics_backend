import express from 'express';
import {
  getMyInfo,
  getMyOtherInfo
} from '../controllers/self.mjs';

const router = express.Router()

router.get('/tellMeAboutYourself', (req, res) => {
  const result = getMyInfo();
  res.send(result)
});

router.get('/advancedInfo', (req, res) => {
  const result = getMyOtherInfo();
  res.send(result)
});

export default router;
