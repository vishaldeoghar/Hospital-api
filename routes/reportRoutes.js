const express = require('express');
const reportController = require('../controllers/reportController');
const router = express.Router();

router.get('/:status', reportController.getReportsByStatus);

module.exports = router;
