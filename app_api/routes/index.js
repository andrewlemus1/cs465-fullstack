const express = require('express');
const router = express.Router();

// Import controllers
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Import authentication middleware
const { authenticateJWT } = require('../middleware/auth');

// Register endpoint
router
  .route('/register')
  .post(authController.register);

// Login endpoint
router
  .route('/login')
  .post(authController.login);

// Trips endpoint
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsAddTrip);

// Single trip endpoint
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;