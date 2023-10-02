const Doctor = require('../models/doctorModel');
const bcrypt = require('bcrypt');
const { comparePasswords } = require('./authController');

exports.register = async (req, res) => {
  try {
    const { username, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = new Doctor({ username, password: hashedPassword, name });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });
    if (!doctor) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const isPasswordValid = await comparePasswords(password, doctor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    // You can generate a token or session here if needed
    res.json({ message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};
