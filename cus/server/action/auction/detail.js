/**
 * @description 拍品详情
 */

var _ = require('lodash');
var model = yog.require('cus/model/auction/detail.js');

module.exports.get = function (req, res) {
  var param = {
    proCode: req.params.id,
    token: req.session.user.token
  };
  model.getDetail(param).then(function (rs) {
    var resObj = req.appData;
    resObj.data = rs.data;
    resObj.data.id = param.proCode;//回传id
    resObj.header.title = rs.data.proname;
    resObj.header.rightIcons = [
      {icon: 'collect',status: 'on'},
      {icon: 'share'}
    ];
    resObj.auctionStatus = req.query.status == null ? 0 : req.query.status;
    res.render('cus/page/auction/detail.tpl', resObj);
  });
};
