const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  tripCode: {
    type: String,
    required: true
  },
  travelers: {
    type: Number,
    required: true,
    min: 1
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String
  }
});

mongoose.model('Booking', bookingSchema);