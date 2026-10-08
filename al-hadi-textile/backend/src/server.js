import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Custom clean request logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    mill: 'AL HADI TEXTILE MILLS API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/products', productRoutes);
app.use('/api/inquiries', inquiryRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Endpoint '${req.originalUrl}' not found` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🧵 AL HADI TEXTILE MILLS - EXPORT REST API RUNNING`);
  console.log(`🌐 PORT: http://localhost:${PORT}`);
  console.log(`📦 Available Endpoints:`);
  console.log(`   - GET  /api/health`);
  console.log(`   - GET  /api/products`);
  console.log(`   - GET  /api/products/categories`);
  console.log(`   - GET  /api/products/:slug`);
  console.log(`   - POST /api/inquiries (WhatsApp Click Tracker)`);
  console.log(`   - POST /api/inquiries/rfq (B2B Bulk Quote Request)`);
  console.log(`=======================================================`);
});
