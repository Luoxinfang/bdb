/**
 * @description 拍品详情
 */

var _ = require('lodash');
var model = yog.require('cus/model/auction/detail.js');

module.exports.get = function (req, res) {
  var Promise = yog.Promise;
  var param = {
    proCode: req.params.id,
    token: req.session.user.token
  };
  Promise.props({
    detail: model.getDetail(param),
    bail: model.getBail(param)
  }).then(function (rs) {
    var resObj = req.appData;
    resObj.bail = rs.bail;
    resObj.data = rs.detail.data;
    resObj.data.id = param.proCode;//回传id
    resObj.header.title = rs.detail.data.proname;
    resObj.header.rightIcons = [
      {icon: 'collect', status: 'on'},
      {icon: 'share'}
    ];
    res.render('cus/page/auction/detail.tpl', resObj);
  });
};
