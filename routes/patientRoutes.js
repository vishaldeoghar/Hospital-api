const express = require('express');
const patientController = require('../controllers/patientController');
const router = express.Router();

router.post('/register', patientController.register);
router.post('/:id/create_report', patientController.createReport);
router.get('/:id/all_reports', patientController.getAllReports);

module.exports = router;
