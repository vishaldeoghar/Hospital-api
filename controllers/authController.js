const jwt = require('jsonwebtoken');

function generateJWTToken(doctorId) {
  // Implementation of JWT token generation goes here
  // You can use the 'jsonwebtoken' library for this purpose
  const secretKey = 'your_secret_key'; // Replace this with your actual secret key
  const token = jwt.sign({ doctorId }, secretKey, { expiresIn: '1h' });
  return token;
}
