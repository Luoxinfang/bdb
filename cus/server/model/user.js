/*session model*/

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();

module.exports = {
  getData: function (data) {
    var query = server.parserData(data, 'user');
    return yog.ral(serverId, {
      path: '/interface/user/index.shtml?' + query
    });
  },
  queryList: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/list.shtml?' + query
    });
  },
  addAddress: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/add.shtml?' + query
    });
  },
  attention: function (data) {
    var query = server.parserData(data, 'user');
    return yog.ral(serverId, {
      path: '/interface/user/attention.shtml?' + query
    });
  },
  //根据addressid获取地址信息
  listdetail: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/listdetail.shtml?' + query
    });
  },
  //根据addressid删除地址信息
  deleteData: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/delete.shtml?' + query
    });
  }

};