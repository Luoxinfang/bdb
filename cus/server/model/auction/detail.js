var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();
var serviceName = 'product';
module.exports = {
  //获取拍品详情
  getDetail: function (data) {
    data = server.parserQuery(data, serviceName);
    return yog.ral(serverId, {
      method: 'get',
      path: '/interface/auction/detail',
      query: data
    });
  },
  //获取用户缴纳的保证金
  getBail: function (data) {
    data = server.parserQuery(data, serviceName);
    return yog.ral(serverId, {
      method: 'get',
      path: '/interface/auction/isregister',
      query: data
    });
  },
  //获取拍品的出价列表
  getBid: function (data) {
    data = server.parserQuery(data, serviceName);
    return yog.ral(serverId, {
      method: 'get',
      path: '/interface/auction/record',
      query: data
    });
  }
};