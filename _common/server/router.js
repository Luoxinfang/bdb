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
  router.get('/result', function (req, res, next) {
    var data = req.query.data;
    try{
      data = JSON.parse(data);
    }catch(e){
      console.log('result page:',e);
    }
    res.render('_common/page/result.tpl', data);
  });
};