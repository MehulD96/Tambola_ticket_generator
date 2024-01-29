import express from 'express';
import { tambolaTicket, getTambola } from '../controller/tambola.js';

const router = express.Router();

router.get("/tambola/:set",tambolaTicket, getTambola);
router.get("/getTambola",getTambola);

export default router;