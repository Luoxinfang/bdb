var server = require('../../lib/server.js');
var serverId = server.getServerId();
//订阅/取消订阅拍品
module.exports.subscribe = function (data) {
  data = server.parserData(data, 'product');
  return yog.ral(serverId, {
    path: '/interface/auction/subcribe',
    data: data
  });
};
