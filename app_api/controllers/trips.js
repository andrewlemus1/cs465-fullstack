const mongoose = require('mongoose');
require('../models/travlr');

const Trip = mongoose.model('Trip');

// Helper function to validate trip data before creating or updating records
const validateTripData = (tripData) => {
  const requiredFields = [
    'code',
    'name',
    'length',
    'start',
    'resort',
    'perPerson',
    'image',
    'description'
  ];

  for (const field of requiredFields) {
    if (!tripData[field]) {
      return `${field} is required.`;
    }
  }

  if (isNaN(tripData.perPerson) || Number(tripData.perPerson) <= 0) {
    return 'Trip price must be a positive number.';
  }

  return null;
};

// GET: /trips - lists all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().exec();

    if (!trips || trips.length === 0) {
      return res.status(404).json({
        message: 'No trips found.'
      });
    }

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({
      message: 'Unable to retrieve trips.',
      error: err.message
    });
  }
};

// GET: /trips/:tripCode - lists a single trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      code: req.params.tripCode
    }).exec();

    if (!trip) {
      return res.status(404).json({
        message: 'Trip not found.'
      });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({
      message: 'Unable to retrieve trip.',
      error: err.message
    });
  }
};

// POST: /trips - adds a new trip
const tripsAddTrip = async (req, res) => {
  try {
    const validationError = validateTripData(req.body);

    if (validationError) {
      return res.status(400).json({
        message: validationError
      });
    }

    const newTrip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(newTrip);
  } catch (err) {
    return res.status(500).json({
      message: 'Unable to create trip.',
      error: err.message
    });
  }
};

// PUT: /trips/:tripCode - updates an existing trip
const tripsUpdateTrip = async (req, res) => {
  try {
    const validationError = validateTripData(req.body);

    if (validationError) {
      return res.status(400).json({
        message: validationError
      });
    }

    const updatedTrip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      {
        new: true,
        runValidators: true
      }
    ).exec();

    if (!updatedTrip) {
      return res.status(404).json({
        message: 'Trip not found.'
      });
    }

    return res.status(200).json(updatedTrip);
  } catch (err) {
    return res.status(500).json({
      message: 'Unable to update trip.',
      error: err.message
    });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};