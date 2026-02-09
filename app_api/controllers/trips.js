const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('Trip');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
    const q = await Model
        .find()
        .exec()
        // Uncomment the line below to show results of query
        // console.log(q);

    if (!q) {
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode})    // Return single record
        .exec();

        // Uncomment the following line to show results of query
        // console.log(q);

    if(!q)
    {
        // Database returned no data
        return res
            .status(404)
            .json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};