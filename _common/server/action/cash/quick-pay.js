/**
 * @description 快捷支付
 */

var md5 = require('md5');
var model = require('../../model/cash.js');
module.exports.get = function (req, res, next) {
  model.queryCash({token: req.session.user.token}).then(function (rs) {
    var data = req.query;
    //账户足够支付当前金额
    data.enough = (rs.cashmoney >= data.price);
    res.render('_common/widget/common/quick-pay/quick-pay.tpl', data);
  }).catch(function (error) {
    yog.log.fatal(error);
  });

};

//支付环节
module.exports.post = function (req, res, next) {
  var data = req.body;
  var type = data.type || '';
  var obj = {
    '0': {//缴纳保证金
      serviceName: 'product',
      path: '/interface/auction/register'
    }
  }
  var param = {};
  switch (type) {
    case '0' :
      param = {
        money: data.money,
        proCode: data.proCode,
        payPwd: md5(data.payPwd)
      };
      break;
  }
  param.token = req.session.user.token;
  model.pay(param, obj[type].path, obj[type].serviceName).then(function (rs) {
    res.json(rs);
  });
};