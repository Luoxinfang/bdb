/**
 * @author radish
 * @description 这个路由处理session 如登陆 退出等
 */
var model = require('../model/upload.js');

//上传图片
module.exports.post = function (req, res, next) {
  model.upload(req.body).then(function (rs) {
    if (rs.status == 0) {
      if (req.body.type === 'photo') {
        //更新用户头像
        req.session.user.imgurl = rs.path;
      }
    }
    res.json(rs);
  }).catch(function (error) {
    yog.log.fatal(error);
  });
};