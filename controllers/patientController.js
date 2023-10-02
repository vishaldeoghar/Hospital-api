const Patient = require('../models/patientModel');
const Report = require('../models/reportModel');

exports.register = async (req, res) => {
  try {
    const { phoneNumber,patientName } = req.body;
    let patient = await Patient.findOne({ phoneNumber, patientName });
    if (!patient) {
      patient = new Patient({ phoneNumber, patientName });
      await patient.save();
    }
    res.status(201).json({ message: 'Patient registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.createReport = async (req, res) => {
  try {
    const patientId = req.params.id;
    const { doctorId, status } = req.body;
    const report = new Report({ patient: patientId, doctor: doctorId, status });
    await report.save();
    res.status(201).json({ message: 'Report created successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    const patientId = req.params.id;
    const reports = await Report.find({ patient: patientId }).sort({ date: 1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};
