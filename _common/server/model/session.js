/**
 * @author roy
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
    status: '00000'
  });
};
//login
module.exports.post = function (req, res, next) {
  var user = req.body;
  if (req.session.login_error_times >= 2) {
    //如果验证码不正确 就此拦截住
    if (req.session.captcha && req.session.captcha !== user.captcha.toLowerCase()) {
      res.json({
        status: '00001',
        exception: '验证码错误'
      });
    }
  } else {
    //将数据传递给模型处理
    model.login(user, function (data) {
      var error_times = req.session.login_error_times;
      if (data.status == '00000') {
        //登陆成功 将user对象写入我们的user类和session
        req.session.user = data.result;
        error_times = 0;
        res.cookie('user_info', JSON.stringify(user.data), {httpOnly: false});
        res.cookie('login_error_times', 0, {httpOnly: false});
      } else {
        if (error_times) {
          error_times++;
        } else {
          error_times = 1;
        }
      }
      //登陆失败 将失败的次数写入session
      req.session.login_error_times = error_times;
      res.cookie('login_error_times', error_times, {httpOnly: false});
      //console.log('user module post:', ses.user);
      res.json(data);
    });
  }
};

module.exports.update = function () {

};

module.exports.put = function (req, res, next) {

};

module.exports.delete = function (req, res, next) {

};