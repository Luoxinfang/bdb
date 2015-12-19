
var model = require('../../model/user.js');

//获取短信验证码
module.exports.get = function (req, res, next) {
  var number = req.query.number;
  model.getSMS({mobile: number, type: '00'}).then(function (data) {
    res.json(data);
  });
};