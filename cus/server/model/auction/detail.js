var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();

module.exports = {
  //获取拍品详情
  getDetail: function (data) {
    data = server.parserQuery(data);
    return yog.ral(serverId, {
      method: 'get',
      path: '/interface/auction/detail',
      query: data
    });
  },
  //获取拍品的出价列表
  getBid: function (data) {
    data = server.parserQuery(data);
    return yog.ral(serverId, {
      method: 'get',
      path: '/interface/auction/record',
      query: data
    });
  }
};