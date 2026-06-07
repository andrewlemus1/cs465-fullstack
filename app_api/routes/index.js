const express = require('express');
const router = express.Router();

// Import controllers
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
const bookingsRouter = require('./bookings');

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

// Trip stats endpoint
router
  .route('/trips/stats')
  .get(tripsController.tripsStats);

// Single trip endpoint
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip);

// Booking routes
router.use('/', bookingsRouter);

module.exports = router;