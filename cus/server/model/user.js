/*session model*/

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();

module.exports = {
  getData: function (data) {
    var query = server.parserData(data, 'user');
    return yog.ral(serverId, {
      path: '/interface/user/index',
	    query: query
    });
  },
  queryList: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/list',
	    query: query
    });
  },
  addAddress: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/add',
	    query: query
    });
  },
  attention: function (data) {
    var query = server.parserData(data, 'user');
    return yog.ral(serverId, {
      path: '/interface/user/attention',
	    query: query
    });
  },
  //根据addressid获取地址信息
  listdetail: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/listdetail',
	    query: query
    });
  },
  //根据addressid删除地址信息
  deleteData: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/delete',
	    query: query
    });
  },
  //设置默认的收货地址
  setdefault: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/setdefault',
	    query: query
    });
  }
};