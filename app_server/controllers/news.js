const news = async function (req, res, next) {
    res.render('news', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    news,
};