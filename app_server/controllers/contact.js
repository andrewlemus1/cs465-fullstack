const contact = async function (req, res, next) {
    res.render('contact', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    contact,
};