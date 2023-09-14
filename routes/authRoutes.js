const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Call the appropriate function from authController to handle authentication
      const isAuthenticated = await authController.authenticate(username, password);
      
      if (isAuthenticated) {
        // Authentication succeeded, generate a token and send it in the response
        const token = authController.generateToken(username); // Implement this function in authController
        res.json({ token });
      } else {
        // Authentication failed
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
