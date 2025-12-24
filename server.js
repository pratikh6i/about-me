import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes

/**
 * GET /api/media
 * Dynamically scans the /public/assets folder and returns a list of files
 */
app.get('/api/media', (req, res) => {
  const assetsPath = path.join(__dirname, 'public', 'assets');
  
  try {
    // Check if assets directory exists
    if (!fs.existsSync(assetsPath)) {
      fs.mkdirSync(assetsPath, { recursive: true });
      return res.json({ files: [], message: 'Assets directory created' });
    }

    const scanDirectory = (dir, basePath = '') => {
      const items = fs.readdirSync(dir);
      let files = [];

      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          files = files.concat(scanDirectory(fullPath, relativePath));
        } else {
          const ext = path.extname(item).toLowerCase();
          const isImage = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(ext);
          const isVideo = ['.mp4', '.webm', '.mov'].includes(ext);
          
          files.push({
            name: item,
            path: `/assets/${relativePath.replace(/\\/g, '/')}`,
            type: isImage ? 'image' : isVideo ? 'video' : 'other',
            size: stat.size,
            modified: stat.mtime
          });
        }
      });

      return files;
    };

    const files = scanDirectory(assetsPath);
    res.json({ files, count: files.length });
  } catch (error) {
    console.error('Error scanning assets:', error);
    res.status(500).json({ error: 'Failed to scan assets directory' });
  }
});

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Media API available at http://localhost:${PORT}/api/media`);
});

export default app;
