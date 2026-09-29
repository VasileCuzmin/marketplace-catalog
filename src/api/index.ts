import express from 'express';
import cors from 'cors';
import { categoriesRouter } from './routes/categories.js';
import { productsRouter } from './routes/products.js';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);

app.use('/api/*path', (_req, res) => { // Catch-all for undefined API routes
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
