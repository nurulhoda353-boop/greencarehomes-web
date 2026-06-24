// cPanel Node.js Application Startup File - Configured for greencare-backend
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

try {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const envPath = path.resolve(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
          value = value.replace(/^"|"$/g, '');
        }
        process.env[key] = value;
      }
    });
  }
} catch (e) {
  console.error('Error loading .env file:', e);
}

// Launch the ESM Nitro server compiled in the 'server' directory.
import('./server/index.mjs');
