const Doctor = require('../models/doctorModel');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = new Doctor({ username, password: hashedPassword });
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
    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    // Generate JWT and send it to the client
    const token = generateJWTToken(doctor._id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

function generateJWTToken(doctorId) {
  // Implementation of JWT token generation goes here
  // You can use the 'jsonwebtoken' library for this purpose
}
