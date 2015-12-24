/**
 * @author radish
 * @description 这个路由处理session 如登陆 退出等
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../model/upload.js');


//上传图片
module.exports.post = function (req, res, next) {

  model.upload(req.body).then(function (rs) {
    if (rs.status == 0) {

    }
    res.json(rs);
  }).catch(function (error) {
    yog.log.fatal(error);
  });
};

module.exports.put = function (req, res, next) {

};
//退出登录
module.exports.delete = function (req, res, next) {
  req.session.user = null;
  res.json({
    status: 0,
    msg: '已退出登录'
  });
};