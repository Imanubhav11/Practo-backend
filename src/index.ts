import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import patientRoutes from './routes/patientRoutes';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', patientRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'The backend server is live' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running live on http://localhost:${PORT}`);
});