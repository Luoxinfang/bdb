/**
 * @author radish
 * @description 这个路由处理注册等
 */
var md5 = require('md5');
var _ = require('lodash');
var model = require('../../model/user.js');

//注册
module.exports.post = function (req, res, next) {
  var param = _.extend({
    requestIP: req.ip,
  }, req.body);
  param.pwd2 = param.pwd = md5(req.body.pwd);
  model.register(param).then(function (data) {
    res.json(data);
  });
};

//更新 密码
module.exports.put = function (req, res, next) {
  var param = req.body;
  if(param.newPwd){
    param.newPwd = md5(param.newPwd);
    model.recovery2(param).then(function (data) {
      res.json(data);
    });
  }else{
    model.recovery1(param).then(function (data) {
      res.json(data);
    });
  }
};