import { mockProducts, categories } from '../data/mockProducts.js';

let products = [...mockProducts];

export const getProducts = (req, res) => {
  try {
    const { category, search, minGsm, maxGsm, featured } = req.query;
    let filtered = [...products];

    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.categorySlug === category || p.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.weave.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
      );
    }

    if (minGsm) {
      filtered = filtered.filter(p => p.gsm >= Number(minGsm));
    }

    if (maxGsm) {
      filtered = filtered.filter(p => p.gsm <= Number(maxGsm));
    }

    if (featured === 'true') {
      filtered = filtered.filter(p => p.featured);
    }

    return res.json({
      success: true,
      count: filtered.length,
      data: filtered
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductBySlug = (req, res) => {
  try {
    const { slug } = req.params;
    const product = products.find(p => p.slug === slug || p.id === slug);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with slug '${slug}' not found`
      });
    }

    // Related products in same category
    const related = products
      .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
      .slice(0, 3);

    return res.json({
      success: true,
      data: {
        ...product,
        related
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getCategories = (req, res) => {
  try {
    return res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createProduct = (req, res) => {
  try {
    const newProduct = {
      id: `prod-${Date.now()}`,
      slug: req.body.slug || req.body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      createdAt: new Date().toISOString(),
      ...req.body
    };

    products.push(newProduct);

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: newProduct
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
