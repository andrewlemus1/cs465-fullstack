const express = require('express');
const router = express.Router();

const bookingsController = require('../controllers/bookings');

// Booking endpoints
router
  .route('/bookings')
  .post(bookingsController.createBooking)
  .get(bookingsController.getAllBookings);

// Booking stats endpoint
router
  .route('/bookings/stats')
  .get(bookingsController.getBookingStats);

// Get bookings by user email  
router
  .route('/bookings/user/:email')
  .get(bookingsController.getBookingsByUser);

module.exports = router;