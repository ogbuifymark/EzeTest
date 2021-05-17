import { Router } from 'express';
import ProductController from './ProductController';

const router = Router();

router.get('/', ProductController.loadExcel);

export default router;
