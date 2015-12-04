module.exports = function (router) {
	router.get('*', function (req, res, next) {
		console.log(req.hostname);
		next();
	});
};