import express from 'express';
import { recordInquiry, getInquiries, submitRfq } from '../controllers/inquiryController.js';

const router = express.Router();

router.post('/', recordInquiry);
router.get('/', getInquiries);
router.post('/rfq', submitRfq);

export default router;
