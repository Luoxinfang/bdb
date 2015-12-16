module.exports = function (router) {
	router.get('*', function (req, res, next) {

		next();
	});
	router.get('/404', function (req, res, next) {
		res.render('_common/page/404.tpl');
	});
	router.get('/500', function (req, res, next) {
		res.render('_common/page/500.tpl');
	});

};