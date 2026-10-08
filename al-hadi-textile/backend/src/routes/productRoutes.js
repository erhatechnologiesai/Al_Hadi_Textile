import express from 'express';
import { getProducts, getProductBySlug, getCategories, createProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/categories', getCategories);
router.get('/:slug', getProductBySlug);
router.post('/', createProduct);

export default router;
