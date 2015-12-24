/**
 * @description
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
    resObj.header.title = '千年古玉';
    resObj.header.leftUrl = '/auction/list';
    resObj.header.rightIcons = [{icon: 'collect'}, {icon: 'share'}];
    resObj.auctionStatus = req.query.status == null ? 0 : req.query.status;
    res.render('cus/page/auction/detail.tpl', resObj);
  });
};
