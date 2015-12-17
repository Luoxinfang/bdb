/**
 * @author radish
 * @description 这个路由处理注册等
 */

var _ = require('lodash');
var model = require('../../model/reg.js');

//注册
module.exports.post = function (req, res, next) {
  var number = req.body.number;
  console.log(number);
  model.getCode({mobile: number, type: '00'}).then(function (data) {
    res.json(data);
  });

};