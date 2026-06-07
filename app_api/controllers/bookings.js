const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');
const Trip = mongoose.model('Trip');

const createBooking = async (req, res) => {
  try {
    const { userEmail, tripCode, travelers, notes } = req.body;

    if (!userEmail || !tripCode || !travelers) {
      return res.status(400).json({ message: 'userEmail, tripCode, and travelers are required.' });
    }

    const trip = await Trip.findOne({ code: tripCode });

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found.' });
    }

    const booking = await Booking.create({
      userEmail,
      tripCode,
      travelers,
      notes
    });

    return res.status(201).json(booking);
  } catch (err) {
    return res.status(500).json({
      message: 'Error creating booking.',
      error: err.message
    });
  }
};

const getBookingsByUser = async (req, res) => {
  try {
    const bookings = await Booking.find({ userEmail: req.params.email });
    return res.status(200).json(bookings);
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving bookings.',
      error: err.message
    });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    return res.status(200).json(bookings);
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving bookings.',
      error: err.message
    });
  }
};

const getBookingStats = async (req, res) => {
  try {
    const stats = await Booking.aggregate([
      {
        $group: {
          _id: null,
          totalBookings: { $sum: 1 },
          totalTravelers: { $sum: "$travelers" },
          averageTravelers: { $avg: "$travelers" }
        }
      }
    ]);

    if (!stats.length) {
      return res.status(404).json({ message: "No booking data found." });
    }

    return res.status(200).json({
      totalBookings: stats[0].totalBookings,
      totalTravelers: stats[0].totalTravelers,
      averageTravelers: Math.round(stats[0].averageTravelers)
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error retrieving booking statistics.",
      error: err.message
    });
  }
};

module.exports = {
  createBooking,
  getBookingsByUser,
  getAllBookings,
  getBookingStats
};