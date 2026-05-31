const rooms = async function (req, res, next) {
    res.render('rooms', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    rooms,
};