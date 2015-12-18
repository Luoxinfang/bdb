/*session model*/

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();

module.exports = {
  //获取用户个人信息
  getData: function (data) {
    var query = server.parserData(data, 'user');
    return yog.ral(serverId, {
      path: '/interface/user/index',
	    query: query
    });
  },
  //查询用户地址信息
  queryList: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/list',
	    query: query
    });
  },
  //用户添加地址信息
  addAddress: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/add',
	    query: query
    });
  },
  //用户关注店铺
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
  },
  //修改用户个人信息
  updateData: function (data) {
    var query = server.parserData(data, 'user');
    return yog.ral(serverId, {
      path: '/interface/user/update.shtml',
      query: query
    });
  }

};