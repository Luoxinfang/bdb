/**
 * @author radish
 * @description 这个路由处理session 如登陆 退出等
 */
var model = yog.require('common/lib/loader-model.js')();

module.exports = function (req, res, next) {
  next();
};
//
module.exports.get = function (req, res, next) {
  //console.log(req.param('userName'));
  res.json({
    status: '0'
  });
};
//提交登录信息
module.exports.post = function (req, res, next) {
  var user = req.body;
    //将数据传递给模型处理
    model.login(user, function (data) {
      //登陆成功 将user对象写入我们的user类和session
      if (data.status == '00000') {
        req.session.user = data.result;
        res.cookie('user_info', JSON.stringify(data.result), {httpOnly: false});
      }

      res.json(data);
    });
};

module.exports.update = function () {

};

module.exports.put = function (req, res, next) {

};

module.exports.delete = function (req, res, next) {

};