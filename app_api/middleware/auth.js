const jwt = require('jsonwebtoken');

// Middleware to authenticate JSON Web Tokens for protected API routes
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({
      message: 'Authorization header is required.'
    });
  }

  const tokenParts = authHeader.split(' ');

  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({
      message: 'Authorization header must use the Bearer token format.'
    });
  }

  const token = tokenParts[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, verifiedUser) => {
    if (err) {
      return res.status(403).json({
        message: 'Invalid or expired token.'
      });
    }

    req.auth = verifiedUser;
    next();
  });
};

module.exports = { authenticateJWT };