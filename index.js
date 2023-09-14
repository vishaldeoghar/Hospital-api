const express = require('express');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const reportRoutes = require('./routes/reportRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = 'mongodb://localhost:27017/hospital_db'; // Replace this with your MongoDB URL

// Middleware
app.use(express.json());

// Routes
app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/reports', reportRoutes);
app.use('/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Error connecting to the database:', err.message));
